# Chainlink Plugin Ideathon Proposal

## Overview

The Chainlink Plugin aims to simplify the process of retrieving price data from Chainlink price feed contracts by providing pre-defined ABIs and addresses for mainnet and Goerli networks. The plugin will allow developers to skip the steps of initialize contracts and call price data without the need for manual ABI search or address lookup.

## Features

### Storage

1. **ABI for AggregatorV3Interface**

   - https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol
   - Store the ABI for the AggregatorV3Interface contract to facilitate contract initialization.

2. **Mainnet & Goerli PriceFeeds addresses**

   - https://docs.chain.link/data-feeds/price-feeds/addresses?network=ethereum&page=1#ethereum-mainnet
   - Store addresses of price feed pairs for both mainnet and Goerli networks to streamline address retrieval.

### Functions

#### `getPrice()`

- **Description:** Retrieves the latest price data from a Chainlink price feed contract.
- **Steps:**
  1. Initialize a new contract instance with ABI and MainnetPriceFeed address.
     ```javascript
     web3.eth.Contract(ABI, address);
     ```
  2. Call the `latestAnswer()` function in the contract to get the price of the pair.
     ```javascript
     contract.methods.latestAnswer().call();
     ```
  3. Return the fetched price.

## Expected Deliverables

- A JavaScript file implementing the ChainlinkPlugin class with the getPrice() method.
- Comments within the getPrice() method explaining the steps and functionality.
