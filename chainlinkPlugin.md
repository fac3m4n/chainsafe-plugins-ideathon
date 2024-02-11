# Chainlink Plugin Ideathon Proposal

## Overview

The Chainlink Plugin aims to simplify the process of retrieving price data from Chainlink price feed contracts by providing pre-defined ABI and addresses for mainnet and Goerli networks. The plugin will allow developers to skip the steps of initialize contracts and call price data without the need for manual ABI search or address lookup.

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
  2. Call the `latestAnswer()` function in the contract to get the price of the pair.
  3. Return the fetched price.

## Category

- [] Community Plugin
- [x] Project Plugin: Chainlink

## Usage (Before & After Plugin)

Before the plugin, devs needs to manually search and import the address, and the ABI of the contracts, now with the plugin, they only need to send as a parameter the pair they want to call and the plugin initialize the contract with the address and the ABI, providing a better developer experience.

## Use case:

- [x] Developer Experience: In this specific case, the plugin is contributing to the developer experience because is saving the steps of ABI search, contract address search, contract initialization and contract call.

## Optional:

Diagrams, Videos, Code, etc... (This will not affect your submission - but make sure everything is understandable)
