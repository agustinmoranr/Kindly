import '../styles/Home.css';
import BookItem from '../components/BookItem';
import getData from '../utils/getData';

const bookList = document.getElementById('bookList')
const favorites = document.getElementById('favorites')
const leidos = document.getElementById('leidos')

const Home = async () => {
  let books = await getData()
  console.log(books)
  
  let existenFavorites = 'Favoritos';

  if(books.body.favorites.length === 0) {
    existenFavorites = 'No hay libros en tu lista de favoritos';
  }
  let existentRead = 'Leídos';

  if(books.body.read.length === 0) {
    existentRead = 'No hay libros en tu lista de leídos';
  }


  const view = 
  `
    ${favorites.innerHTML = 
      `
        <h2>${existenFavorites}</h2>
        <div class="BookSection">
          ${books.body.favorites.map(book => 
          BookItem(book),
          ).join('')}
        </div>
      ` 
    }

  ${leidos.innerHTML = 
  `
  <h2>${existentRead}</h2>
  <div class="BookSection">
  ${books.body.read.map(book => 
    BookItem(book)
    ).join('')}
  </div>
  `}

  ${bookList.innerHTML = `
  <h2>¡Nuestro contenido!</h2>
  <div class="BookSection">
  ${books.body.books.map(book => 
    BookItem(book)
    ).join('')}
    </div>
    `
  }
  `;
  return view
}

export default Home;