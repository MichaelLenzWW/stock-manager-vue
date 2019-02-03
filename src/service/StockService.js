import Stock from "@/models/Stock.js";
import Exception from "@/models/ExceptionClass.js";

export default class StockService {
  /**
   * Adds a ticker symbol to the database.
   *
   * @param {String} symbol the ticker symbol
   *
   * @param {String} name the ticker name
   *
   * @returns {void}
   */
  async addTickerSymbol(symbol, name) {
    console.log(`Adding Ticker Symbol [${symbol}] - [${name}].`);

    const url = "http://localhost:8081/stock";
    const stock = new Stock(null, "1", symbol, name);

    try {
      const result = await fetch(url, {
        method: "POST",
        body: JSON.stringify(stock),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (result.status !== 200) {
        throw new Exception("");
      }
      return result;
    } catch (error) {
      const message = `Error on adding the ticker symbol [${symbol}] to the database.`;
      console.error(message, error);
      throw new Exception(message, error);
    }
  }

  /**
   * Delte the given ticker symbol from the database.
   *
   * @param {Number} id the ticker symbol to be deleted
   */
  async delteTickerSymbol(id) {
    console.log(`Deleting Ticker Symbol with id [${id}].`);

    const url = `http://localhost:8081/stock/${id}`;

    try {
      const result = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (result.status !== 200) {
        throw new Exception("");
      }
      return result;
    } catch (error) {
      const message = `Error on deleting the ticker [${id}] from the database.`;
      console.error(message, error);
      throw new Exception(message, error);
    }
  }

  /**
   * Get the ticker symbols from the server via asynchronous REST call.
   *
   * @returns {Stock[]}
   */
  async fetchTickerSymbols() {
    console.log("Fetching ticker symbols.");

    try {
      const result = await fetch("http://localhost:8081/stock");
      return await result.json();
    } catch (error) {
      const message = "Error on loading the ticker symbols from the database.";
      console.error(message, error);
      throw new Exception(message, error);
    }
  }

  /**
   *
   * @param {*} stockId
   */
  async fetchOrdersByStockId(stockId) {
    try {
      console.log(`Fetching orders for stock id [${stockId}].`);
      const orders = await fetch(`http://localhost:8081/orders?search=stockId:${stockId}`);
      return await orders.json();
    } catch (error) {
      const message = `Error on loading orders for stock id [${stockId}].`;
      console.error(message, error);
      throw new Exception(message, error);
    }
  }
}
