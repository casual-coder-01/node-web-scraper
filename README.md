# Node.js Web Scraper (Books to Scrape)

A beginner–intermediate Node.js web scraping project that demonstrates how to fetch HTML pages, parse them, extract structured data, and save the results locally.

This project scrapes **book titles and prices** from the public demo website **books.toscrape.com** using **Axios** and **Cheerio**.

---

## 🚀 Features

* Fetches website HTML using Axios
* Parses DOM using Cheerio (jQuery-like syntax)
* Extracts book title and price data
* Saves scraped data to a local JSON file (`books.json`)
* Clean Git history suitable for portfolio / Upwork proof

---

## 🛠 Tech Stack

* **Node.js**
* **Axios** – HTTP client
* **Cheerio** – HTML parsing
* **Git & GitHub** – version control

---

## 📂 Project Structure

```
node-web-scraper/
│
├── scraper.js        # Main scraping logic
├── books.json        # Scraped output data
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## ▶️ How to Run

1. Clone the repository

   ```bash
   git clone https://github.com/casual-coder-01/node-web-scraper.git
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Run the scraper

   ```bash
   node scraper.js
   ```

4. Output will be saved to `books.json`

---

## 📊 Sample Output

```json
{
  "title": "A Light in the Attic",
  "price": "£51.77"
}
```

---

## ⚠️ Disclaimer

This project is for **educational and portfolio purposes only**. The target website is a public demo site created specifically for scraping practice.

---

## 👤 Author

**Abhinav Thakur**
GitHub: [https://github.com/casual-coder-01](https://github.com/casual-coder-01)

---

⭐ If you find this useful, feel free to star the repository!
