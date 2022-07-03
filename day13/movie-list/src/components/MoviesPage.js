import React, { useEffect } from 'react'
import MoviesService from '../services/movies.service'
import FileService from '../services/file.service'
import {Link} from 'react-router-dom'

import './MoviesPage.css'


export default function MoviesPage() {

  const [movies, setMovies] = useState([]);
  const [movieToRemove, setMovieToRemove] = useState(null)
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
    setMovieToRemove(movie)
    setShowModal(true);
  }

  async function removeMovie() {
    try {
      await FileService.deleteFile(movieToRemove.downloadUrl);
      await MoviesService.deleteMovie(movieToRemove.id);

      setMovies(movies.filter(movie => movie.id !== movieToRemove.id));
      closeModal
    } catch (err) {

    }
  }
  return (
    <div className="container my-4">
      <div className='d-flex justify-content-end'>
        <Link to ='/add-movie'>Add Movie</Link>
      </div>
      <div className='d-flex flex-wrap'
      {
        movies.map((movie) => <div key={movie.id} className='card movie-card'>
          <img src={movie.downloadUrl} className="card-img-top" alt="movie cover" />
          <div className="card-body">
            <h5 className="card-title">
              {movie.name}
            </h5>
          </div>
          <button onClick = {() => onRemoveMovieClicked(movie)} className='btn btn-secondary'>
            <i className='bi bi-trash'></i>
          </button>
        </div>)
      }
    </div>
    </div>
  )
}
