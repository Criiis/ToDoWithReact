import React from 'react';



function App() {
  let data = [
    {
      "item": "item1",
      "status": "uncomplete",
      "registration": new Date('2021-03-03'),
    },
    {
      "item": "item2",
      "status": "complete",
      "registration": new Date('2021-06-03')
    }
  ];




  localStorage.setItem('itemsToDo', JSON.stringify(data));
  let token = localStorage.getItem('itemsToDo');
  console.log(token);
  console.log(JSON.parse(token));





  return (
    <>
    <h1>hello world!</h1>

      {fetchData.map( movie => (
        <BrowserRouter key={`${movie.id}10`}>
          <Link to={`?cat=${cat}&id=mov_${movie.id}&name=${movie.name == null ? movie.original_title : movie.name}`} onClick={ () => {
          handleMovieClick(movie)
          }}>
            <img
            ref={movieRef}
            id={`mov_${movie.id}`}
            key={movie.id}
            src={`${base_URL}${ movie.poster_path === null ? movie.backdrop_path : movie.poster_path }`}
            alt={movie.name == null ? movie.original_title : movie.name}
            />
          </Link>
        </BrowserRouter>
      ))}
    </>
  );
}

export default App;
