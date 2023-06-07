const Database = require('./Database.js');
const User = require('./entities/User.js');
const Author = require('./entities/Author.js');
const Book = require('./entities/Book');
const Poster = require('./entities/Poster');
const Order = require('./entities/Order');

module.exports = class App {
  static #database = new Database();

  createUser(name, email, password) {
    const user = new User(name, email, password);
    App.#database.saveUser(user);
  }

  getUsers() {
    return App.#database.find('users');
  }

  createAuthor(name, nationality, bio) {
    const author = new Author(name, nationality, bio);
    App.#database.saveAuthor(author);
  }

  getAuthors() {
    return App.#database.find('authors');
  }

  createBook(
    title,
    synopsis,
    genre,
    pages,
    author,
    description,
    price,
    inStock
  ) {
    const book = new Book(
      title,
      synopsis,
      genre,
      pages,
      author,
      description,
      price,
      inStock
    );
    App.#database.saveBook(book);
  }

  getBooks() {
    return App.#database.find('books');
  }

  addBook(bookName, quantity) {
    App.#database.addBooksToStock(bookName, quantity);
  }

  createPoster(name, description, height, width, price, inStock) {
    const poster = new Poster(name, description, height, width, price, inStock);
    App.#database.savePoster(poster);
  }

  addBook(bookName, quantity) {
    App.#database.addPostersToStock(bookName, quantity);
  }

  createOrder(items, user) {
    const order = new Order(items, user);
    App.#database.saveOrder(order);

    order.data.items.forEach(({ product, quantity }) => {
      if (product instanceof Book) {
        App.#database.removeBooksToStock(product.name, quantity);
      } else if (product instanceof Poster) {
        App.#database.removePostersToStock(product.name, quantity);
      }
    });
  }

  getOrders() {
    return App.#database.find('orders');
  }

  showDatabase() {
    App.#database.showStorage();
  }
};
