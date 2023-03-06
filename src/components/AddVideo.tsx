import { useState, ChangeEvent, FormEvent } from "react";

function AddVideo() {
  const [url, setUrl] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
      // Show success message
      setMessage("Video was added successfully.");
      setUrl("");
    } catch (error) {
      console.error(error);
      // Show error message
      setMessage("An error occurred while adding the video.");
    }
  };

  return (
    <div className="mx-auto w-1/2">
      {message && (
        <div
          className={`${
            message.includes("success") ? "bg-green-200" : "bg-red-200"
          } text-center p-2 mb-5`}
        >
          {message}
        </div>
      )}
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
