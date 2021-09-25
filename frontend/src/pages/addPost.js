import Header from "../components/header";
import React, { useState } from "react";
import { storage } from "../lib/firebase";
import { uploadImageByUserId } from "../services/firebase";
import { useHistory } from "react-router";

function AddPost(user) {
  const history = useHistory();
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            uploadImageByUserId(user.user.uid, caption, url);
          })
          .then(history.push("/"));
      }
    );
  };

  return (
    <div>
      <Header />
      <div className="h-16 border-t border-gray-primary mt-12 pt-4">
        <input
          onChange={({ target }) => setCaption(target.value)}
          value={caption}
          placeholder="Enter caption"
          type="text"
        />
        <input type="file" onChange={handleChange} />
        <button
          className={"bg-blue-medium text-white w-50 rounded h-8 font-bold"}
          onClick={handleUpload}
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default AddPost;
