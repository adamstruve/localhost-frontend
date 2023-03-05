import { useState } from "react";

function AddVideo() {
  const [url, setUrl] = useState("");

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const data = { url };
    try {
      const response = await fetch("http://127.0.0.1:5000/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      // Do something with the response, like show a success message
    } catch (error) {
      console.error(error);
      // Handle the error, like show an error message
    }
  };

  return (
    <div className="mx-auto w-1/2">
      <form className="flex justify-center" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="url"
          value={url}
          onChange={handleUrlChange}
          className="border border-stone-900 rounded p-2 mr-2"
        />
        <button type="submit" className="bg-stone-900 text-white rounded p-2">
          Add This Video
        </button>
      </form>
    </div>
  );
}

export default AddVideo;
