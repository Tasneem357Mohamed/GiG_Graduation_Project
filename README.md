# ProServ

A small React frontend for a professional services company landing page and client portal. It includes public marketing sections (home, about, services), a contact form, and a login/signup flow that unlocks protected service pages and contact access.

## Tech stack

- Frontend: React 19 + Vite
- Routing: `react-router-dom`
- Styling: Tailwind CSS v4, plus custom CSS modules and component styles
- Theme: light/dark mode toggle persisted in `localStorage`
- Auth: token-based auth using `access_token` and `refresh_token` stored in the browser; requests include `Authorization: Bearer ...`
- API backend: external service hosted on Railway at `https://gig-program-apis-production.up.railway.app`
- Hosting/deployment: no frontend hosting config is present in this repo; the app is configured as a Vite client and calls the Railway-hosted API endpoints directly

## Key features

- Landing page with a hero section and CTA
- Public `Home`, `About`, and service listing pages
- Protected routes for `/services`, `/contact`, `/strategic-planning`, and `/service/:id`
- Login and signup UI with validation for password confirmation
- Auto-login after successful registration
- Theme toggle in the navbar
- Contact form submission to the external API
- Service inquiry form used on the detailed service page
- User greeting and sign-out in the navbar when a valid token is present

## Project structure

```text
.
├── public/                  # Static assets and favicon
├── src/
│   ├── App.jsx             # Route setup and protected route wrappers
│   ├── main.jsx            # App bootstrap and ThemeProvider
│   ├── assets/
│   │   ├── images/         # Product/service imagery
│   │   └── styles/         # Global CSS and home page styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── ScrollToTop.jsx
│   │   │   └── Single_Service.jsx
│   │   └── ui/
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   │   └── useTheme.js
│   └── pages/
│       ├── Home.jsx
│       ├── AboutUs.jsx
│       ├── Auth.jsx
│       ├── ContactUs.jsx
│       └── Services/Services.jsx
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── .gitignore
└── README.md
```

## Setup instructions

1. Install dependencies:

```bash
npm install
```

2. Start the app locally:

```bash
npm run dev
```

The app runs in Vite development mode, typically on:

```text
http://localhost:5173
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

Notes:

- There is no `.env` configuration in the repo.
- The API URLs are hardcoded directly in the frontend code, so if you need to point the app at a different backend, update those URLs in the relevant components/context files.

## Authentication flow

The app uses a simple access/refresh token flow implemented in `src/context/AuthContext.jsx`.

- On login (`POST /api/login/`) or registration (`POST /api/register/`), the frontend receives an `access` token and a `refresh` token.
- Both tokens are saved in `localStorage` as `access_token` and `refresh_token`.
- `token` state is set from the access token, and later used to check whether the user is authenticated.
- `ProtectedRoute` checks `isLoading` and `token`; if no token exists, it redirects the user to `/auth`.
- For authenticated API calls, the app sends `Authorization: Bearer <access_token>`.
- If a request gets a `401 Unauthorized`, `authFetch` calls `POST /api/token/refresh/` using the stored refresh token.
- If refresh succeeds, it stores the new access token and retries the original request.
- On app load, the app also calls `GET /api/api/me/` to load the current user details.
- The user is logged out by clearing both tokens and resetting the user state.

## API endpoints used

Base URL:

```text
https://gig-program-apis-production.up.railway.app
```

Main endpoints called by the app:

```text
POST /api/login/
POST /api/register/
POST /api/token/refresh/
GET /api/api/me/
POST /api/contact/
```

The frontend does not include a separate backend service in this repository; it consumes the external Railway-hosted API directly.


