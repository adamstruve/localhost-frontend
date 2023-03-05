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
          <div className="flex justify-between items-center">
            <div className="w-3/4 mx-auto">
              <video
                className="w-auto"
                controls
                autoPlay
                poster={`http://127.0.0.1:5000/videos/${videoData.thumbnail}`}
              >
                <source
                  src={`http://127.0.0.1:5000/videos/${videoData.filename}`}
                />
              </video>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-center mt-5">
            {videoData.title}
          </h1>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Video;
