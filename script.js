function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return title + ' by ' + author + ', ' + pages + ' pages, ' + read;
};

const LOTR = new Book('Lord Of the Rings', 'J.R.R Tolkien', 450, true);
const HarryPotter1 = new Book('Harry Potter1', 'J.K Rowling', 500, true);
const HarryPotter2 = new Book('Harry Potter2', 'J.K Rowling', 600, true);
const HarryPotter3 = new Book('Harry Potter3', 'J.K Rowling', 700, true);
const HarryPotter4 = new Book('Harry Potter4', 'J.K Rowling', 800, true);
const HarryPotter5 = new Book('Harry Potter5', 'J.K Rowling', 800, true);
const Hitchiker = new Book(
  'Hitchikers Guide To the Galaxy',
  'Douglas Adams',
  400,
  true
);

let myLibrary = [
  HarryPotter1,
  HarryPotter2,
  HarryPotter3,
  HarryPotter4,
  HarryPotter5,
  Hitchiker,
  LOTR,
];
let title1 = document.getElementById('title').value;

let addBookToLibrary = () => {
  const div = document.createElement('div');
  const a = document.createElement('div');
  const title = document.createElement('h3');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const read = document.createElement('p');
  const btn = document.createElement('button');
  const checkbox = document.createElement('input');
  let title1 = document.getElementById('title').value;
  let author1 = document.getElementById('author').value;
  let pages1 = document.getElementById('pages').value;
  let read1 = document.getElementById('read').checked;

  let newBook = new Book(title1, author1, pages1, read1);
  myLibrary.push(newBook);

  let s = document.getElementById('main');
  div.classList.add('books');
  checkbox.type = 'checkbox';
  btn.classList.add('deleteBtn');
  a.classList.add('readStatus');
  checkbox.classList.add('checked');
  div.setAttribute('data-id', myLibrary.length);
  title.innerHTML = 'Title: ' + title1;
  author.innerHTML = 'Author: ' + author1;
  pages.innerHTML = 'Pages: ' + pages1;
  if (read1 == true) {
    read.innerHTML = 'Read';
    checkbox.checked = true;
  } else {
    read.innerHTML = 'Not read';
  }

  checkbox.addEventListener('click', (e) => {
    if (e.path[1].querySelector('p').innerHTML == 'Read') {
      e.path[1].querySelector('p').innerHTML = 'Not read';
    } else {
      e.path[1].querySelector('p').innerHTML = 'Read';
    }
  });

  btn.innerHTML = 'Delete';
  btn.addEventListener('click', (id) => {
    let selector = id.path[1];
    let index = id.path[1].getAttribute('data-id');
    myLibrary.splice(index, 1);
    selector.parentNode.removeChild(selector);
  });

  s.appendChild(div);
  div.appendChild(title);
  div.appendChild(author);
  div.appendChild(pages);
  div.appendChild(a);
  a.appendChild(read);
  a.appendChild(checkbox);
  div.appendChild(btn);
};

const submit = document.getElementById('submit');
submit.addEventListener('click', (event) => {
  addBookToLibrary();
  event.preventDefault();
});

//Toggles read status
const toggleRead = (book) => {
  book.read = !book.read;
  if (event.path[1].children[0].innerHTML == 'Read') {
    event.path[1].children[0].innerHTML = 'Not read';
  } else {
    event.path[1].children[0].innerHTML = 'Read';
  }
};

const displayBooks = () => {
  myLibrary.forEach((book, index) => {
    const d = document.createElement('div');
    const a = document.createElement('div');
    const title = document.createElement('h3');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('p');
    const btn = document.createElement('button');
    const checkbox = document.createElement('input');
    let s = document.getElementById('main');
    d.classList.add('books');

    checkbox.type = 'checkbox';
    if (book.read == true) {
      checkbox.checked = true;
    }
    btn.classList.add('deleteBtn');

    s.appendChild(d);
    d.appendChild(title);
    d.appendChild(author);
    d.appendChild(pages);
    d.appendChild(a);
    a.appendChild(read);
    a.appendChild(checkbox);
    d.appendChild(btn);

    d.id = book.title;
    a.classList.add('readStatus');
    checkbox.classList.add('checked');
    checkbox.addEventListener('click', function () {
      toggleRead(book);
    });
    d.setAttribute('data-id', index);
    title.innerHTML = 'Title: ' + book.title;
    author.innerHTML = 'Author: ' + book.author;
    pages.innerHTML = 'Pages: ' + book.pages;
    if (read) {
      read.innerHTML = 'Read';
    } else {
      read.innerHTML = 'Not read';
    }
    btn.innerHTML = 'Delete';
  });
};

displayBooks();

//Toggles form to add new books
showBook.addEventListener('click', () => {
  if (form.style.display == 'block') {
    form.style.display = 'none';
  } else {
    form.style.display = 'block';
  }
});

//Adds delete function to all delete buttons
let del = document.querySelectorAll('.deleteBtn');
let addDelete = () => {
  del.forEach((e) => {
    e.addEventListener('click', (a) => {
      deleteBook(a);
    });
  });
};

addDelete();

let deleteBook = (id) => {
  console.log(id);
  let selector = id.path[1];
  let index = id.path[1].getAttribute('data-id');
  myLibrary.splice(index, 1);
  selector.parentNode.removeChild(selector);
};

const form = document.getElementsByTagName('form')[0];
const title = document.getElementById('title');

form.addEventListener('submit', function (event) {
  // if the form contains valid data, we let it submit
  console.log('rosk');
  if (!title.validity.valid) {
    console.log('ins');
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
  }
});

function showError() {
  if (title.validity.valueMissing) {
    // display the following error message.
    title.textContent = 'You need to fill out this field.';
  }
}
