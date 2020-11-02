import Header from '../templates/Header.js';
import Home from '../pages/Home';
import Book from '../pages/Book';
import NotFound from '../pages/NotFound'
import getHash from '../utils/getHash'
import rutesHandler from '../utils/rutesHandler';

const routes = {
  '/': Home,
  '/:id': Book,
}

const router = async() => {

  const header = document.getElementById('header');
  header.innerHTML = Header()
  
  let hash = await getHash();
  let route = await rutesHandler(hash)

  let view = route ? routes[route] : NotFound
  
  let render = await view();
  return render
}

export default router