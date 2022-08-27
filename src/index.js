//Fetch on demand with forms

const init = () => {
    const form = document.querySelector('form')
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector('input#searchByID');
  
      fetch(`http://localhost:3000/movies/${input.value}`)
      .then(response => response.json())
      .then(movie => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
  
        title.innerText = movie.title;
        summary.innerText = movie.summary;
      });
    });
  }
  
  document.addEventListener('DOMContentLoaded', init);
