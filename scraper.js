const axios = require("axios");
const cheerio = require("cheerio");

const URL = "https://books.toscrape.com/";

async function scrapeBooks() {
  console.log("Loading HTML into Cheerio...");

  const response = await axios.get(URL);
  const html = response.data;

  const $ = cheerio.load(html);
  const books = $(".product_pod");
console.log("Books found on page:", books.length);

}

scrapeBooks();

