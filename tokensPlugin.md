# Tokens Ideathon Proposal

## Overview

The Tokens Plugin aims to simplify the interaction with various types of tokens on the Ethereum blockchain by providing pre-defined methods for ERC20, ERC721, ERC777, ERC1155, and ERC4626 tokens. This plugin enables developers to interact with token contracts, including querying token balances, transferring tokens, and accessing token metadata without searching for the ABIs.

## Features

### Storage

- ABI/Metadata for Token Contracts: ERC20, ERC721, ERC777, ERC1155, ERC4626.

### Functions

#### `erc20(address)`

- **Description:** Initializes a contract instance for ERC20 token contracts.
- **Steps:**
  1. Check if the provided address is valid.
  2. Create a contract instance using the provided address and the stored ABI for ERC20.
  3. Link the contract instance to the plugin and return it.

#### `erc721(address)`

- **Description:** Initializes a contract instance for ERC721 token contracts.
- **Steps:**
  1. Check if the provided address is valid.
  2. Create a contract instance using the provided address and the stored ABI for ERC721.
  3. Link the contract instance to the plugin and return it.

#### `erc777(address)`

- **Description:** Initializes a contract instance for ERC777 token contracts.
- **Steps:**
  1. Check if the provided address is valid.
  2. Create a contract instance using the provided address and the stored ABI for ERC777.
  3. Link the contract instance to the plugin and return it.

#### `erc1155(address)`

- **Description:** Initializes a contract instance for ERC1155 token contracts.
- **Steps:**
  1. Check if the provided address is valid.
  2. Create a contract instance using the provided address and the stored ABI for ERC1155.
  3. Link the contract instance to the plugin and return it.

#### `erc4626(address)`

- **Description:** Initializes a contract instance for ERC4626 token contracts.
- **Steps:**
  1. Check if the provided address is valid.
  2. Create a contract instance using the provided address and the stored ABI for ERC4626.
  3. Link the contract instance to the plugin and return it.

## Category

- [x] Community Plugin: Standard Tokens plugin

## Use Cases

- [x] Developer Experience: The Tokens Plugin improves the developer experience by providing pre-defined ABIs for various token standards, reducing the complexity of contract interaction and metadata retrieval.

## Usage (Before & After Plugin)

Before integrating the plugin, developers need to manually search for and import ABIs for different token contracts, leading to a time-consuming process. However, with the Tokens Plugin, developers can initialize contract instances for various token standards by simply providing the contract address.
