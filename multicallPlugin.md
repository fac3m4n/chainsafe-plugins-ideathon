# Multicall Ideathon Proposal

## Overview

The Multicall Plugin aims to simplify and optimize the interaction with multiple Ethereum smart contracts by enabling batched calls to various contract methods in a single transaction. It leverages the Multicall contract, which aggregates multiple contract calls into one, reducing gas costs and improving efficiency.

## Features

### Storage

- [ABI of Multicall3 contract](https://etherscan.io/address/0xcA11bde05977b3631167028862bE2a173976CA11#code)

### Functions

#### `aggregate()`

- **Description:** Aggregates multiple contract calls into a single transaction.
- **Steps:**
  1. Initialize a contract instance to talk to the Multicall contract in the Ethereum mainnet.
  2. Call the aggregate method with an array of contract calls.
  3. Execute the transaction and return the value of the various calls.

## Category

- [x] Community Plugin: Multicall plugin
- [] Project Plugin: (e.g, Chainlink plugin, Superfluid plugin)
- [] Other (specify)

## Use Cases

- [x] Developer Experience: The Multicall Plugin improves the developer experience by simplifying the process of interacting with multiple smart contracts. Developers can batch multiple contract calls into a single transaction, reducing complexity and saving time.
- [x] Gas Optimization: By aggregating multiple contract calls into one transaction, the Multicall Plugin optimizes gas usage, resulting in cost savings for users.

## Usage (Before & After Plugin)

Before the plugin, developers need to manually execute multiple transactions for each contract call, leading to higher gas costs and increased complexity. However, with the Multicall Plugin, developers can batch multiple contract calls into a single transaction, streamlining the interaction process and optimizing gas usage.

## Optional

[Include any additional information, such as diagrams, videos, code snippets, or tips for using/understanding the plugin idea effectively.]

## Tips:

[Make sure to provide a clear overview, in case we don't know how the project works, we can get a clear undesrtanding about how it works and how the plugin provides value to that specific project or use case.]
