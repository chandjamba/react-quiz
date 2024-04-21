import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Pages/Home";
import Leader from "./Pages/Leader";

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Quiz Test</h1>
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
