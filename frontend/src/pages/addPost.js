import Header from "../components/header";
import React, { useState } from "react";

function AddPost() {
  return (
    <div>
      <Header />
      <div className="h-16 border-t border-gray-primary mt-12 pt-4">
        <form action="">
          <input placeholder="Enter caption" type="text" />
          <input type="file" />
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
}

export default AddPost;
