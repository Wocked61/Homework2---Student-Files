const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTgyMTA5YjM5MjNkZmM2NjdmN2M4NDc5MDJlYWRhYSIsIm5iZiI6MTc0MTM5OTI5OC44NDE5OTk4LCJzdWIiOiI2N2NiYTUwMjlhM2Y3MDEzZmE0ZjY1ZWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dCtlhuJ-_2oy8hXCgIbSgtN0WqogwdFrqCXg8a6gmQA'
  }
};

fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1', options)
  .then(res => res.json())
  .then(data => console.log(data))
  .then(res => console.log(res))
  .catch(err => console.error(err));

// const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTgyMTA5YjM5MjNkZmM2NjdmN2M4NDc5MDJlYWRhYSIsIm5iZiI6MTc0MTM5OTI5OC44NDE5OTk4LCJzdWIiOiI2N2NiYTUwMjlhM2Y3MDEzZmE0ZjY1ZWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dCtlhuJ-_2oy8hXCgIbSgtN0WqogwdFrqCXg8a6gmQA'
// const BASE_URL = 'https://api.moviedb.org/3';
// const searchURL = BASE_URL + '/search/movie?' + API_KEY;



// const prev = document.getElementById('prev');
// const next = document.getElementById('next');
// const current = document.getElementById('current');

// var currentPage = 1;
// var nextPage = 2;
// var prevPAge = 3;
// var lastUrl = '';
// var totalPages = 100;

// //search bar functionality
// const form = document.getElementById('form');
// const search = document.getElementById('search');

// form.addEventListener('submit' , (e)=> {
//   e.preventDefault();

//   const searchTerm = search.value;

//   if(searchTerm){
//     getMovies(searchURL+'&query=' + searchTerm);
//   } else {
//     getMovies(API_URL);
//   }
// })