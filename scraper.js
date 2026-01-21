const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");


const URL = "https://books.toscrape.com/";

async function scrapeBooks() {
  const response = await axios.get(URL);
  const html = response.data;
  const $ = cheerio.load(html);

  const books = [];

  $(".product_pod").each((index, element) => {
    const title = $(element).find("h3 a").attr("title");
    const price = $(element).find(".price_color").text();

    books.push({
      title,
      price,
    });
  });

  console.log(books);

  fs.writeFileSync("books.json", JSON.stringify(books, null, 2));
  console.log("Data saved to books.json");
}
scrapeBooks();

