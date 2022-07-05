import React, { useEffect, useState } from "react";
import MoviesService from "../services/movies.service";
import FileService from "../services/file.service";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

import "./MoviesPage.css";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [movieToRemove, setMovieToRemove] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    try {
      const movies = await MoviesService.fetchMovies();
      setMovies(movies);
    } catch (err) {

    }
  }

  function closeModal() {
    setShowModal(false);
    setMovieToRemove(null);
  }

  function onRemoveMovieClicked(movie) {
    setMovieToRemove(movie);
    setShowModal(true);
  }

  async function removeMovie() {
    try {
      await FileService.deleteFile(movieToRemove.downloadUrl);
      await MoviesService.deleteMovie(movieToRemove.id);

      setMovies(movies.filter(movie => movie.id !== movieToRemove.id));
      closeModal();
    } catch (err) {

    }
  }

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-end mb-3">
        <Link to="/add-movie">Add Movie</Link>
      </div>

      <div className="d-flex flex-wrap">
        {movies.map(movie => 
          <div key={movie.id} className="card movie-card">
            <img
              src={movie.downloadUrl}
              className="card-img-top"
              alt="movie cover"
            />
            <div className="card-body">
              <h5 className="card-title"> {movie.name} </h5>
            </div>

            <button
              className="btn btn-secondary remove-button"
              onClick={() => onRemoveMovieClicked(movie)}
            >
              <i className="bi bi-trash"></i>
            </button>
          </div>
        )}
      </div>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Remove movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to remove the movie {movieToRemove?.name}</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={closeModal}>
            Cancel
          </button>
          <button className="btn btn-danger" onClick={removeMovie}>
            Remove
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
