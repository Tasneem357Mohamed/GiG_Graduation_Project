import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("access_token"));
  const [isLoading, setIsLoading] = useState(true);

  const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem("refresh_token");
    if (!refreshToken) return null;

    try {
      const res = await fetch("https://gig-program-apis-production.up.railway.app/api/token/refresh/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh: refreshToken })
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("access_token", data.access);
        setToken(data.access);
        return data.access;
      } else {
        logout();
        return null;
      }
    } catch (err) {
      logout();
      return null;
    }
  };

  const authFetch = async (url, options = {}) => {
    let currentToken = localStorage.getItem("access_token");
    let res = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        ...(currentToken ? { "Authorization": `Bearer ${currentToken}` } : {})
      }
    });

    if (res.status === 401 && localStorage.getItem("refresh_token")) {
      currentToken = await refreshAccessToken();
      if (currentToken) {
        res = await fetch(url, {
          ...options,
          headers: {
            ...options.headers,
            "Authorization": `Bearer ${currentToken}`
          }
        });
      }
    }
    return res;
  };

  useEffect(() => {
    if (token) {
      // Try to fetch user profile using authFetch (handles token expiration)
      authFetch("https://gig-program-apis-production.up.railway.app/api/api/me/")
      .then(res => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then(data => {
        if (data.email) {
          setUser(data);
        } else if (data.username) {
           setUser(data);
        } else {
          setUser({ email: "User" });
        }
      })
      .catch(err => {
        console.error("Failed to fetch user", err);
        // authFetch handles logout on refresh failure, but if it fails completely:
        if (!localStorage.getItem("access_token")) {
           logout();
        }
      })
      .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, [token]);

  const login = async (email, password) => {
    try {
      const res = await fetch("https://gig-program-apis-production.up.railway.app/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        setToken(data.access);
        return { success: true };
      } else {
        return { success: false, error: "Invalid credentials" };
      }
    } catch (error) {
      return { success: false, error: "Network error" };
    }
  };

  const register = async (email, password, profile_data) => {
    try {
      const res = await fetch("https://gig-program-apis-production.up.railway.app/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, profile: profile_data || {} })
      });

      if (res.ok) {
        // Auto login after successful registration
        return await login(email, password);
      } else {
        const errorData = await res.json();
        return { success: false, error: errorData.detail || "Registration failed" };
      }
    } catch (error) {
      return { success: false, error: "Network error" };
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, register, logout, authFetch }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
