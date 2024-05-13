document.addEventListener('DOMContentLoaded', function () {
  const movieGrid = document.getElementById('movie-grid');
  const API_KEY = 'fb402b3f3dba449afd8fe538276dbdb5'; // Reemplaza 'tu_clave_de_api' con tu clave de API de TMDb
  const API_URL = 'https://api.themoviedb.org/3/discover/movie';

  // Función para obtener películas de la API
  function fetchMovies() {
    fetch(`${API_URL}?api_key=${API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo obtener la respuesta de la API');
        }
        return response.json();
      })
      .then(data => {
        // Llama a la función para renderizar las tarjetas de películas con los datos obtenidos de la API
        renderMovies(data.results);
      })
      .catch(error => {
        console.error('Error al obtener datos de la API:', error);
      });
  }

  // Función para mostrar las tarjetas de películas
  function renderMovies(movies) {
    movieGrid.innerHTML = '';
    movies.forEach(movie => {
      const card = document.createElement('div');
      card.classList.add('movie-card');
      card.innerHTML = `
          <div class="movie-card" data-id="${movie.id}">
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
            <div class="movie-info">
              <h3>${movie.title}</h3>
              <p>Año de Estreno: ${movie.release_date}</p>
              <p class="overview">${movie.overview}</p>
            </div>
          </div>
        `;
      // Agrega un evento clic para redireccionar a la página de detalles de la película
      card.addEventListener('click', function () {
        const movieId = movie.id;
        // Redirige a la página de detalles de la película con el ID de la película como parte de la URL
        window.location.href = `detalle.html?id=${movieId}`;
      });
      movieGrid.appendChild(card);
    });
  }

  // Llama a la función para obtener películas al cargar la página
  fetchMovies();
});


