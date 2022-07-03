import React, { useState } from "react";
import MoviesService from "../services/movies.service";
import FileService from "../services/file.service";

import { Movie } from "../models/movie";
import { useNavigate, Link } from "react-router-dom";
import ImageSelector from "./ImageSelector";

export default function AddMoviePage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  async function onFormSubmit(e) {
    e.preventDefault();

    try {
      //upload the file
      const downloadUrl = await FileService.uploadImage(file, (progress) => {
        console.log("Upload Progress", progress);
      });

      //save the movie to firebase
      MoviesService.createMovie(
        new Movie({
          id: null,
          name: name,
          downloadUrl: downloadUrl,
        })
      );

      navigate("/");
    } catch (err) {
      //deal with the error
      //setError(err.message);
    }
  }

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-end">
        <Link to="/">Movie List</Link>
      </div>
      <div className="card card-body">
        <h1>Add movie</h1>

        <form onSubmit={onFormSubmit}>
            <ImageSelector 
                title='Movie Cover Image'
                onFileChange={setFile}>
            </ImageSelector>

          <div className="mb-3">
            <label className="form-label">Movie Name</label>
            <input
              //the next two lines are two-way binding
              value={name} //when we change the name state, it updates in the input
              onChange={(e) => setName(e.target.value)} //when we change name in the input (ie typing it in), it changes the state
              type="text"
              className="form-control"
            />
          </div>

          <div className="text-center">
            <button className="btn btn-primary px-5">Add movie</button>
          </div>
        </form>
      </div>
    </div>
  );
}
