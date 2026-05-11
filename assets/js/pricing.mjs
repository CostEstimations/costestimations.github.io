// Install dependencies first:
// npm install node-fetch cheerio


// import fetch from "node-fetch";
// import * as cheerio from "cheerio";
// --------------------------
// import * as cheerio from "cheerio";--------------------------
// import express from "express";
// import cors from "cors";
  
// const app = express();

// app.use(cors({ origin: 'https//foo.com' }));

// app.get('/', (req, res) => {
//   res.status(200).json({ title: 'heelo world a' });
// });

export async function scrapePrices() {
    // 1. Send requests to the websites
    const url = "https://priceindex.pk/construction-material-rates-pakistan/";
    const steelUrl = "https://priceindex.pk/saria-rate-pakistan-today-steel-iron-rod-price/";

    const response = await fetch(url);
    const html = await response.text();

    const steelResponse = await fetch(steelUrl);
    const steelHtml = await steelResponse.text();

    // 2. Parse the HTML content
   // const $ = cheerio.load(html);
   
   
   
   // const parser = new DOMParser;
    // const doc =  new DOMParser.parseFromString(html, 'text/html');  
    // // Extracting the specific elements
    // const cementPrices = doc.querySelector("#tablepress-33 tr.row-2.even td.column-3").text().replace(/,/g, "");
    // const sandPrices = doc.querySelector("#tablepress-33 tr.row-5.odd td.column-3").text().replace(/,/g, "");
    // const coarsePrices = doc.querySelector("#tablepress-33 tr.row-6.even td.column-3").text().replace(/,/g, "");
    // const steelPrices = doc.querySelector("#tablepress-33 tr.row-4.even td.column-3").text().replace(/,/g, "");

    // Extract numbers using regex
    const cementPrices_n = cementPrices.match(/\d+/g)?.map(Number) || [];
    const sandPrices_n = sandPrices.match(/\d+/g)?.map(Number) || [];
    const coarsePrices_n = coarsePrices.match(/\d+/g)?.map(Number) || [];
    const steelPrices_n = steelPrices.match(/\d+/g)?.map(Number) || [];


  
    const prices_all = {
 
      cement_avg : cementPrices_n.reduce((sum, val) => sum + val, 0) / cementPrices_n.length,
      sand_avg : sandPrices_n.reduce((sum, val) => sum+ val, 0)/ sandPrices_n.length,
      coarse_avg : coarsePrices_n.reduce((sum, val) => sum+val ,0 )/ coarsePrices_n.length,
      steel_avg : steelPrices_n.reduce((sum, val) => sum+val ,0 )/ steelPrices_n.length

    }
      console.log("Cheerio cheerio");

    return prices_all;
  }
var scrapped = scrapePrices();
export { scrapped }

// var prices = await scrapePrices();
// console.log(prices.cement_avg)
// console.log(prices.coarse_avg)
// console.log(prices.steel_avg)  