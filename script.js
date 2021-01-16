function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return title + author + pages + read;
  };
}

const LOTR = new Book('Lord Of the Rings', 'J.R.R Tolkien', 450, 'Read');
const Hitchiker = new Book(
  'Hitchikers Guide To the Galaxy',
  'Douglas Adams',
  400,
  'Read'
);
const HarryPotter1 = new Book('Harry Potter1', 'J.K Rowling', 500, 'Read');
const HarryPotter2 = new Book('Harry Potter2', 'J.K Rowling', 600, 'Read');
const HarryPotter3 = new Book('Harry Potter3', 'J.K Rowling', 700, 'Read');
const HarryPotter4 = new Book('Harry Potter4', 'J.K Rowling', 800, 'Read');
const HarryPotter5 = new Book('Harry Potter5', 'J.K Rowling', 800, 'Not read');

let myLibrary = [
  HarryPotter1,
  HarryPotter2,
  HarryPotter3,
  HarryPotter4,
  HarryPotter5,
  Hitchiker,
  LOTR,
];

let addBookToLibrary = () => {
  let title1 = document.getElementById('title').value;
  let author1 = document.getElementById('author').value;
  let pages1 = document.getElementById('pages').value;
  let read1 = document.getElementById('read').checked;
  let newBook = new Book(title1, author1, pages1, read1);
  myLibrary.push(newBook);

  const d = document.createElement('div');
  const a = document.createElement('div');
  const title = document.createElement('h3');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const read = document.createElement('p');
  const btn = document.createElement('button');
  const checkbox = document.createElement('input');
  let s = document.querySelector('.main');
  d.classList.add('books');
  checkbox.type = 'checkbox';
  btn.classList.add('deleteBtn');

  s.appendChild(d);
  d.appendChild(title);
  d.appendChild(author);
  d.appendChild(pages);
  d.appendChild(a);
  a.appendChild(read);
  a.appendChild(checkbox);
  d.appendChild(btn);

  a.classList.add('readStatus');
  checkbox.classList.add('checked');
  d.setAttribute('data-id', myLibrary.length);
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
};

const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
  addBookToLibrary();
});

let displayBooks = () => {
  myLibrary.forEach((e, index) => {
    const d = document.createElement('div');
    const a = document.createElement('div');
    const title = document.createElement('h3');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('p');
    const btn = document.createElement('button');
    const checkbox = document.createElement('input');
    let s = document.querySelector('.main');
    d.classList.add('books');

    checkbox.type = 'checkbox';
    if (e.read == 'Read') {
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

    a.classList.add('readStatus');
    checkbox.classList.add('checked');
    d.setAttribute('data-id', index);
    title.innerHTML = 'Title: ' + e.title;
    author.innerHTML = 'Author: ' + e.author;
    pages.innerHTML = 'Pages: ' + e.pages;
    read.innerHTML = e.read;
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

//Toggles read status
let check = document.querySelectorAll('.checked');
check.forEach((e) => {
  e.addEventListener('click', (a) => {
    if (
      e.parentNode.parentNode.querySelector('.readStatus').querySelector('p')
        .innerHTML == 'Read'
    ) {
      e.parentNode.parentNode
        .querySelector('.readStatus')
        .querySelector('p').innerHTML = 'Not read';
    } else {
      e.parentNode.parentNode
        .querySelector('.readStatus')
        .querySelector('p').innerHTML = 'Read';
    }
  });
});
