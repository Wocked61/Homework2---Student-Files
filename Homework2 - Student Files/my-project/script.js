const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTgyMTA5YjM5MjNkZmM2NjdmN2M4NDc5MDJlYWRhYSIsIm5iZiI6MTc0MTM5OTI5OC44NDE5OTk4LCJzdWIiOiI2N2NiYTUwMjlhM2Y3MDEzZmE0ZjY1ZWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dCtlhuJ-_2oy8hXCgIbSgtN0WqogwdFrqCXg8a6gmQA'
  }
};

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(res => res.json())
  .then(data => {console.log(data)
    showMovies(data)
  })
  .catch(err => console.error(err));

const main = document.getElementById('main');
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

function showMovies(data) {

  main.innerHTML = '';

  data.results.forEach(mov => {

    


    const{title,poster_path,release_date,vote_average} = mov
    const movEL = document.createElement('div');
    movEL.classList.add('movie');
    movEL.innerHTML = `
    <div class="box">
      <img class="Picture" src="${IMG_URL+ poster_path}" alt="${title}" id="Movie_Picture">
      <div>
          <p class="pictureText" id="Movie_Title">${title}</p>
          <p class="pictureDesc" id="Movie_Release">${"Release Date: "+release_date}</p>
          <p class="pictureDesc" id="Movie_Rating">${"Rating: "+vote_average}</p>
      </div>
    </div>`
  

    main.appendChild(movEL);

  });

  const movie_search = document.getElementById("Movie_id").value.toLowerCase();
  const page = data.page;
  const total_pages = data.total_pages;
 
}

