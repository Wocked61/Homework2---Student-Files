const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTgyMTA5YjM5MjNkZmM2NjdmN2M4NDc5MDJlYWRhYSIsIm5iZiI6MTc0MTM5OTI5OC44NDE5OTk4LCJzdWIiOiI2N2NiYTUwMjlhM2Y3MDEzZmE0ZjY1ZWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dCtlhuJ-_2oy8hXCgIbSgtN0WqogwdFrqCXg8a6gmQA'
  }
};
let page = 1;

function fetchMovies(page) {
  fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      showMovies(data);
    })
    .catch(err => console.error(err));
}

fetchMovies(page);

const main = document.getElementById('main');
const footer = document.getElementById('footer');
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

function showMovies(data) {

  main.innerHTML = '';
  footer.innerHTML = '';

  data.results.forEach(mov => {

    
    const{title,poster_path,release_date,vote_average} = mov;
    const movEL = document.createElement('div');
    movEL.classList.add('movie');
    movEL.innerHTML = `
    <div class="box">
      <img class="Picture" src="${poster_path?  IMG_URL+ poster_path: "https://play-lh.googleusercontent.com/xu-QRRdES_4ChdqrocEp7Dy4jtkST123_EX6wJ5pCq2VE7v4aSgt_Zw946h5DkN3iA"}" alt="${title}" id="Movie_Picture">
      <div>
          <h1 class="pictureText" id="Movie_Title">${title}</h1>
          <p class="pictureDesc" id="Movie_Release">${"Release Date: "+release_date}</p>
          <p class="pictureDesc" id="Movie_Rating">${"Rating: "+vote_average}</p>
      </div>
    </div>`;
  
    main.appendChild(movEL);
    //footer for buttons

  });

  const page = data.page;
  const total_pages = data.total_pages;
  const page_number = document.createElement('div');
  page_number.innerHTML = `
    <div class="center">
      <button class="button" id="prev" onclick="prevPage()">Previous</button>
      <p id="page">${"Page " + page + " of " + total_pages}</p>
      <button class="button" id="next" onclick="nextPage()">Next</button>
    </div>`

  footer.appendChild(page_number);
}

//previous button
function prevPage() {
  if (page > 1) {
    page--;
    fetchMovies(page);
  }
}


//next button
function nextPage() {
  page++;
  fetchMovies(page);
}
