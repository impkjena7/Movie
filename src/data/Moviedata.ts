export const moviesData = [
  {
    id: 1,
    title: 'Movie 1',
    releaseDate: '2023-09-01',
    description: 'Description for Movie 1.',
    userRating: 4.5,
    director: 'Director 1',
    actors: ['Actor 1', 'Actor 2'],
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Movie 2',
    releaseDate: '2023-09-02',
    description: 'Description for Movie 2.',
    userRating: 3.8,
    director: 'Director 2',
    actors: ['Actor 3', 'Actor 4'],
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Movie 3',
    releaseDate: '2023-09-03',
    description: 'Description for Movie 3.',
    userRating: 4.2,
    director: 'Director 3',
    actors: ['Actor 5', 'Actor 6'],
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'Movie 4',
    releaseDate: '2023-09-03',
    description: 'Description for Movie 4.',
    userRating: 4.2,
    director: 'Director 4',
    actors: ['Actor 5', 'Actor 6'],
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    title: 'Movie 5',
    releaseDate: '2023-09-03',
    description: 'Description for Movie 5.',
    userRating: 4.2,
    director: 'Director 5',
    actors: ['Actor 5', 'Actor 6'],
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    title: 'Movie 6',
    releaseDate: '2023-09-03',
    description: 'Description for Movie 6.',
    userRating: 4.2,
    director: 'Director 6',
    actors: ['Actor 5', 'Actor 6'],
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    title: 'Movie 7',
    releaseDate: '2023-09-03',
    description: 'Description for Movie 7.',
    userRating: 4.2,
    director: 'Director 7',
    actors: ['Actor 5', 'Actor 6'],
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    title: 'Movie 8',
    releaseDate: '2023-09-03',
    description: 'Description for Movie 8.',
    userRating: 4.2,
    director: 'Director 8',
    actors: ['Actor 5', 'Actor 6'],
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 9,
    title: 'Movie 9',
    releaseDate: '2023-09-03',
    description: 'Description for Movie 9.',
    userRating: 4.2,
    director: 'Director 9',
    actors: ['Actor 5', 'Actor 6'],
    image: 'https://via.placeholder.com/150',
  },
  // Add more movies here
];

export interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  description: string;
  userRating: number;
  director: string;
  actors: string[];
  image: string;
}
