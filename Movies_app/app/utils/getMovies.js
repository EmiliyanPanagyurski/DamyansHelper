const getMovies = async (URL) => {
  return await fetch(URL);
}

export default getMovies;