import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Videos from "./components/Videos";
import Video from "./components/Video";

function App() {
  return (
    <BrowserRouter>
      <NavLink
        to={{
          pathname: `/`,
        }}
        style={{ cursor: "pointer" }}
      >
        Home{" "}
      </NavLink>
      <Routes>
        <Route path="/" element={<Videos />} />
        <Route path="/video/:id" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
