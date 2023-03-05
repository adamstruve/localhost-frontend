import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Header from "./components/Header";
import Videos from "./components/Videos";
import Video from "./components/Video";
import SearchResults from "./components/SearchResults";
import AddVideo from "./components/AddVideo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Videos />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/add" element={<AddVideo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
