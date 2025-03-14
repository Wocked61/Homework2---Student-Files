const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTgyMTA5YjM5MjNkZmM2NjdmN2M4NDc5MDJlYWRhYSIsIm5iZiI6MTc0MTM5OTI5OC44NDE5OTk4LCJzdWIiOiI2N2NiYTUwMjlhM2Y3MDEzZmE0ZjY1ZWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dCtlhuJ-_2oy8hXCgIbSgtN0WqogwdFrqCXg8a6gmQA'
  }
};
let page = 1;
let sortOption = 'SortBy';
let searchQuery = '';

document.getElementById('sort').addEventListener('change', (event) => {
  sortOption = event.target.value;
  page = 1;
  fetchMovies(page, sortOption, searchQuery);
});

document.getElementById('Movie_id').addEventListener('input', (event) => {
  searchQuery = event.target.value;
  page = 1;
  fetchMovies(page, sortOption, searchQuery);
});

function fetchMovies(page, sortOption, searchQuery) {
  let url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;
  
  if (searchQuery) {
    url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&language=en-US&page=${page}`;
  } else if (sortOption === 'ReleaseAsc') {
    url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=release_date.asc`;
  } else if (sortOption === 'ReleaseDesc') {
    url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=release_date.desc`;
  } else if (sortOption === 'RatingAsc') {
    url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=vote_average.asc`;
  } else if (sortOption === 'RatingDesc') {
    url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=vote_average.desc`;
  }

  fetch(url, options)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      showMovies(data);
    })
    .catch(err => console.error(err));
}

fetchMovies(page, sortOption, searchQuery);

const main = document.getElementById('main');
const footer = document.getElementById('footer');
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

function showMovies(data) {
  main.innerHTML = '';
  footer.innerHTML = '';

  data.results.forEach(mov => {
    const { title, poster_path, release_date, vote_average } = mov;
    const movEL = document.createElement('div');
    movEL.classList.add('movie');
    movEL.innerHTML = `
    <div class="box">
      <img class="Picture" src="${poster_path ? IMG_URL + poster_path : "https://dennymfg.com/cdn/shop/products/ckgrayHigh_600x.jpg?v=1619109728"}" alt="${title}" id="Movie_Picture">
      <div>
          <h1 class="pictureText" id="Movie_Title">${title}</h1>
          <p class="pictureDesc" id="Movie_Release">${"Release Date: " + release_date}</p>
          <p class="pictureDesc" id="Movie_Rating">${"Rating: " + vote_average}</p>
      </div>
    </div>`;

    main.appendChild(movEL);
  });

  const page = data.page;
  const total_pages = data.total_pages;
  const page_number = document.createElement('div');
  page_number.innerHTML = `
    <div class="center">
      <button class="button" id="prev" onclick="prevPage()">Previous</button>
      <p id="page">${"Page " + page + " of " + total_pages}</p>
      <button class="button" id="next" onclick="nextPage()">Next</button>
    </div>`;

  footer.appendChild(page_number);
}

//previous button
function prevPage() {
  if (page > 1) {
    page--;
    fetchMovies(page, sortOption, searchQuery);
  }
}

//next button
function nextPage() {
  page++;
  fetchMovies(page, sortOption, searchQuery);
}
