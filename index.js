const searchInput = document.getElementById("search-input");
const userList = document.getElementById("user-list");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  if (!query) {
    userList.innerHTML = "";
    return;
  }
  const apiUrl = `https://api.github.com/search/users?q=${query}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const users = data.items;
      displayUserList(users);
    })
    .catch((error) => {
      console.error(error);
    });
});

function displayUserList(users) {
  userList.innerHTML = "";
  users.forEach((user) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = user.html_url;
    link.target = "_blank";
    link.textContent = user.login;
    listItem.appendChild(link);
    userList.appendChild(listItem);
  });
}




const searchInput = document.getElementById("search-input");
const bookList = document.getElementById("book-list");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  if (!query) {
    bookList.innerHTML = "";
    return;
  }
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const books = data.items;
      displayBookList(books);
    })
    .catch((error) => {
      console.error(error);
    });
});

function displayBookList(books) {
  bookList.innerHTML = "";
  books.forEach((book) => {
    const listItem = document.createElement("li");
    const title = document.createElement("h3");
    title.textContent = book.volumeInfo.title;
    const authors = document.createElement("p");
    authors.textContent = "Author(s): " + book.volumeInfo.authors.join(", ");
    const description = document.createElement("p");
    description.textContent = book.volumeInfo.description;
    listItem.appendChild(title);
    listItem.appendChild(authors);
    listItem.appendChild(description);
    bookList.appendChild(listItem);
  });
}
