
import HomePage from "./pages/Home";

function  App() 
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;