
const myLibrary = []
function Book(title, author, pages, read) {
  this.id = Date.now().toString();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
Book.prototype.toggleRead = function() {
    this.read = !this.read;
};
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read)
    myLibrary.push(book);
    displayBooks();
}
function displayBooks() {
    const container = document.getElementById("library-container");
    container.innerHTML = "";
}
myLibrary.forEach(book => {
    const card = document.createElement("div")
    card.classList.add("book-card");
    card.innerHTML = `
    <h3>"${book.title}"</h3>
    <p>By: ${book.author}</p>
    <p>${book.pages}</p>
    <button class="${book.read ? `read-btn` : `unread-btn`}" data-id="${book.id}">
    ${book.read ? `Read` : `Not Read`}
    </button>
    <button class="remove-btn" data-remove="${book.id}")">Remove</button>
    `;
    container.appendChild(card);
});

document.getElementById(`library-container`).addEventListener("click", e => {
    if (e.target.dataset.id) {
        const book = myLibrary.find(b => b.id === e.target.dataset.id);
        if (book) book.toggleRead();
        displayBooks();
    }
    if (target.dataset.remove) {
        const index = myLibrary.findIndex(b => b.id === e.target.dataset.remove);
        if (index !== -1)
        myLibrary.splice(index, 1);
         displayBooks();    
    }
});

const showBtn = document.getElememtById("new-book-btn");
const form = document.getElementById("book-form");

showBtn.addEventListener("click", () => {
    form.classList.toggle("hidden")
});



form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    const read = document.getElementById('read-status')

    addBookToLibrary(title, author, pages, read);
    form.reset();
    form.classList.add(`hidden`);
}
);

