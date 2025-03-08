const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTgyMTA5YjM5MjNkZmM2NjdmN2M4NDc5MDJlYWRhYSIsIm5iZiI6MTc0MTM5OTI5OC44NDE5OTk4LCJzdWIiOiI2N2NiYTUwMjlhM2Y3MDEzZmE0ZjY1ZWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dCtlhuJ-_2oy8hXCgIbSgtN0WqogwdFrqCXg8a6gmQA'
    }
  };
  
  fetch('https://api.themoviedb.org/3/authentication', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));