const axios = require("axios");

const api = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 1000,
});

// Task 10: Get all books async
const getAllBooks = async () => {
  try {
    const response = await api.get("/");
    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
};

// Task 11: Search ISBN using Promises
const searchByISBN = (isbn) => {
  return api
    .get(`/isbn/${isbn}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error.response.data);
    });
};

// Task 12: Search author using async/await
const searchByAuthor = async (author) => {
  try {
    const response = await api.get(`/author/${author}`);
    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
};

// Task 13: Search title using promises
const searchByTitle = (title) => {
  return api
    .get(`/title/${title}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error.response.data);
    });
};

// Examples
getAllBooks();
searchByISBN(1);
searchByAuthor("Jane Austen");
searchByTitle("Pride and Prejudice");
