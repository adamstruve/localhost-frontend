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
            <div className="aspect-w-16 aspect-h-9 md:max-h-720 md:h-screen mx-auto">
              <video
                className="object-cover w-full h-full"
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
          <h1 className="text-lg md:text-3xl font-bold text-center mt-5">
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
