import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface Video {
  id: number;
  title: string;
  thumbnail: string;
}

function Videos() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    // Define the URL of the JSON feed
    const url = "http://127.0.0.1:5000/videos";

    // Use the fetch API to get the JSON feed
    fetch(url)
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div id="videos">
      {videos.map((video) => (
        <div key={video.title}>
          <NavLink
            to={{
              pathname: `/video/${video.id}`,
            }}
            style={{ cursor: "pointer" }}
          >
            <img
              src={"http://127.0.0.1:5000/videos/" + video.thumbnail}
              alt={video.title}
            />
            <p>
              id: {video.id} - {video.title}
            </p>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default Videos;
