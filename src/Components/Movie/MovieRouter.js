import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Movies from './Movie';
import MovieCreate from './MovieCreate';
import MovieDelete from './MovieDelete';
import MovieUpdate from './MovieUpdate';
import MovieList from './MovieList';

const Movie = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="listar" element={<MovieList />} />
        <Route path="criar" element={<MovieCreate />} />
        <Route path="deletar" element={<MovieDelete />} />
        <Route path="atualizar" element={<MovieUpdate />} />
      </Routes>
    </div>
  );
};

export default Movie;
