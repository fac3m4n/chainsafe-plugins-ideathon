# Sablier Plugin for web3.js

## Overview

This plugin aims to integrate the [Sablier protocol] (https://sablier.com/) into the web3.js library, enabling developers to seamlessly create, manage, and interact with Sablier streams within their decentralized applications (DApps). Sablier is a token streaming protocol that allows for real-time, continuous token transfers, particularly useful for handling payroll, vesting, airdrops, and other recurring payment scenarios.

- **How does the project work?** Sablier creates ERC-721 NFT streams that represent a continuous token flow from a sender to a recipient over a specified duration. The sender deposits tokens into the stream, and the recipient can withdraw the accrued tokens at any time during the stream's lifespan.

- **What problem does the plugin solve?** The plugin solves the challenge of integrating Sablier's token streaming functionality into web3.js-based DApps, making it easier for developers to leverage Sablier's capabilities without having to interact with the protocol directly.

- **How does it improve the DevEx or project functionality?** By providing a seamless integration with Sablier, the plugin enhances the developer experience by abstracting away the complexities of interacting with the Sablier protocol directly. It also extends the functionality of web3.js-based projects by enabling real-time token streaming capabilities, which can be beneficial for various use cases.

## Features

### Storage

The plugin may need to store the following information to facilitate its functionality:

- **Stream Details:** Information about created streams, including stream IDs, sender and recipient addresses, token addresses, start and end times, and other relevant metadata.
- **User Accounts:** Addresses of the users (senders and recipients) interacting with the plugin.
- **Token Information:** Details about the tokens being streamed, such as token addresses and decimals.

### Functions

#### `createStream()`

- **Description:** Creates a new Sablier stream with specified parameters.

- **Steps:**

 1. Validate input parameters (sender, recipient, token address, start time, end time, amount).
 2. Call the Sablier contract's `createStream` function with the provided parameters.
 3. Store the created stream details (stream ID, metadata) for future reference.
 4. Return the stream ID or other relevant information to the caller.

#### `withdrawFromStream()`

- **Description:** Allows a recipient to withdraw the accrued tokens from a Sablier stream.

- **Steps:**

 1. Validate the input parameters (stream ID, recipient address).
 2. Call the Sablier contract's `withdrawFromStream` function with the provided stream ID and recipient address.
 3. Update the stored stream details to reflect the withdrawal.

#### `cancelStream()`

- **Description:** Cancels an existing Sablier stream, allowing the sender to reclaim the remaining tokens.

- **Steps:**

 1. Validate the input parameters (stream ID, sender address).
 2. Call the Sablier contract's `cancelStream` function with the provided stream ID and sender address.
 3. Update the stored stream details to reflect the cancellation.

#### `getStreamDetails()`

- **Description:** Retrieves the details of a specific Sablier stream.

- **Steps:**

 1. Validate the input parameters (stream ID).
 2. Call the Sablier contract's `getStream` function with the provided stream ID.
 3. Return the stream details (sender, recipient, token address, start and end times, amount, etc.) to the caller.

[Add more functions as needed, such as batch stream creation, stream balances, and others based on the Sablier protocol's capabilities.]

## Category

- [] Community Plugin
- [x] Project Plugin: Sablier Plugin

## Use Cases

- [x] Developer Experience - simplifies the integration of Sablier's token streaming functionality into web3.js-based DApps
- [x] Other - enables real-time token streaming for payroll, vesting, airdrops, and other recurring payment scenarios

## Usage (Before & After Plugin)

**Before the Plugin:**
Developers would need to interact with the Sablier protocol directly, which involves understanding and implementing the low-level contract interactions for creating, managing, and withdrawing from streams. This process can be complex and error-prone, especially for developers unfamiliar with the Sablier protocol.

**After the Plugin:**
With the Sablier plugin for web3.js, developers can seamlessly integrate Sablier's token streaming functionality into their DApps using a familiar and user-friendly API provided by the plugin. The plugin abstracts away the complexities of interacting with the Sablier contracts, making it easier to create, manage, and interact with streams within their web3.js-based applications.

## Sablier Protocol

The Sablier protocol enables real-time, continuous token streaming on the Ethereum blockchain and other EVM-compatible chains like Polygon. It has been operational since 2019 and has processed over 43,000 streams from tens of thousands of users worldwide.

Sablier's key features include:

- Support for various token distribution models (linear vesting, cliffs, step unlocks, etc.)
- Representing each stream as an ERC-721 NFT for composability with DeFi protocols
- Decentralized and permissionless operation with security audits
- Flexibility for handling payroll, grants, airdrops, and other continuous payment scenarios

By integrating Sablier into web3.js through this plugin, developers can leverage these powerful token streaming capabilities within their DApps, streamlining operations around token distribution and payments for organizations like DAOs, businesses, and more.
