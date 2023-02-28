import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface VideoData {
  title: string;
  filename: string;
  thumbnail: string;
}

function Video() {
  const { id } = useParams();
  const [videoData, setVideoData] = useState<VideoData | null>(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/video/${id}`)
      .then((response) => response.json())
      .then((data) => setVideoData(data));
  }, [id]);

  return (
    <div>
      {videoData ? (
        <>
          <h1 className="text-3xl font-bold underline">{videoData.title}</h1>
          <p>{videoData.filename}</p>
          <video
            controls
            poster={`http://127.0.0.1:5000/videos/${videoData.thumbnail}`}
          >
            <source
              src={`http://127.0.0.1:5000/videos/${videoData.filename}`}
            />
          </video>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Video;
