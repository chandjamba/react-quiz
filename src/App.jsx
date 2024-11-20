// Import  //
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

// Create Component named App in which we provide the routes //
export default function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Quiz Test</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
