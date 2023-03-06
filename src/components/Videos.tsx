import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface Video {
  id: number;
  title: string;
  thumbnail: string;
}

function Videos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    // Define the URL of the JSON feed with pagination parameters
    const url = `http://127.0.0.1:5000/videos?page=${page}&page_size=12`;

    // Use the fetch API to get the JSON feed
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.videos);
        setTotalPages(data.total_pages);
      })
      .catch((error) => console.error(error));
  }, [page]);

  function handlePageChange(newPage: number) {
    setPage(newPage);
  }

  return (
    <div>
      <div className="px-5 mb-10 full-max-width mx-auto">
        <div
          id="videos"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-6 gap-4 text-sm font-bold leading-6 bg-stripes-fuchsia rounded-lg px-5"
        >
          {videos.map((video) => (
            <div className="mb-5" key={video.title}>
              <NavLink
                to={{
                  pathname: `/video/${video.id}`,
                }}
                style={{ cursor: "pointer" }}
              >
                <div className="relative rounded-lg overflow-clip mb-2 outline-0 max-h-52">
                  <img
                    src={"http://127.0.0.1:5000/videos/" + video.thumbnail}
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
      </div>

      <div className="mb-10 flex justify-center">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            className={`mx-1 text-2xl p-3 rounded ${
              p === page ? "bg-gray-300" : "bg-gray-200"
            }`}
            onClick={() => handlePageChange(p)}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Videos;
