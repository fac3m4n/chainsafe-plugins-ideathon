//import web3 plugin base
import { Web3PluginBase } from "web3";

class ChainlinkPlugin extends Web3PluginBase {
  /** STORAGE (what needs to be store for this plugin to work or provide a better developer experience?)
   *
   * 1. ABI aggregatorV3 interface
   *    Store the ABI for the contract initialization, so the devs will skip this step of searching the ABI
   *
   * 2. Mainnet & Goerli PriceFeeds addresses
   *    Store the addresses of the pairs so the dev doesn't need to search the addresses for each network and pair
   */

  //MainnetPriceFeeds addresses:

  async getPrice() {
    /* 
        1. initialize a new contract (with ABI and MainnetPriceFeed)
        2. call the function latestAnswer() in the contract to get the price of the pair
        3. return the price
        */
  }
}
