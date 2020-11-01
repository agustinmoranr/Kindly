import '../styles/BookItem.css'

const BookItem = (book, id) => {
  const view = 
    `
    <article class="BookItem">
      <a href="#/${book.id}">
        <img src="https://m.media-amazon.com/images/I/41cj3vv7mjL.jpg" alt="${book.title}">
        <p class="main-info">${book.title}</p>
        <p class="main-info">${book.author}</p>
      </a>
    </article>
    `
  return view;
};

export default BookItem;