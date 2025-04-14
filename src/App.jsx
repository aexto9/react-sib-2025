import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages";
import Books from "./Pages/books";


function App() {
  return (
    <>
      <div className="container">
        
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App
