import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface Video {
  id: number;
  title: string;
  thumbnail: string;
}

function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q");

  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    if (searchQuery) {
      const url = `http://127.0.0.1:5000/search?q=${searchQuery}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => setVideos(data))
        .catch((error) => console.error(error));
    }
  }, [searchQuery]);

  return (
    <div
      id="videos"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-6 gap-4 text-sm font-bold leading-6 bg-stripes-fuchsia rounded-lg mb-10 px-5 full-max-width mx-auto"
    >
      {videos.map((video) => (
        <div className="mb-5" key={video.title}>
          {/* Use NavLink to navigate to video page */}
          <NavLink
            to={{
              pathname: `/video/${video.id}`,
            }}
            style={{ cursor: "pointer" }}
          >
            <div className="relative rounded-lg overflow-clip mb-2 outline-0 max-h-52">
              <img
                src={`http://127.0.0.1:5000/videos/${video.thumbnail}`}
                alt={video.title}
              />
            </div>

            <div className="flex">
              <div className="w-fit leading-tight text-black">
                {video.title}
              </div>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
