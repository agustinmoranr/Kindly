import getHash from '../utils/getHash';
import getData from '../utils/getData';

const content = document.getElementById('content');

const book = async() => {
  let id = await getHash()
  let bookInfo = await getData(id)

  const view = 
  `
  ${content.innerHTML = `
    <div class="Book">
      <div class="Book__cover">
        <img src="https://m.media-amazon.com/images/I/41cj3vv7mjL.jpg" alt="${bookInfo.body.title}">
        <h2>${bookInfo.body.title}</h2>
      </div>
      <div class="Book__details">
        <ul>
          <li>Titulo: ${bookInfo.body.title}</li>
          <li>Author: ${bookInfo.body.author}</li>
          <li>Editorial: ${bookInfo.body.editorial}</li>
          <li>Descripción: ${bookInfo.body.description}</li>
          <li>Genero: ${bookInfo.body.genders}</li>
          <li>Páginas: ${bookInfo.body.pages}</li>
          <li>Publicación: ${bookInfo.body.publication}</li>
        </ul>
        <div class="actions">
          <button  class="material-icons">add_box</button>
          <button id="read" class="material-icons">add_task</button>
      </div>
      </div>
    </div>
  `
  }
  `
  return view
}

export default book;