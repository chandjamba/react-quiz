import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

// Pages //
import Home from "./Pages/Home";
import Leader from "./Pages/Leader";

// Create Component named App in which we provide the routes //
export default function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Quiz Class</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="leader">LeaderBoard</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="leader" element={<Leader />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
