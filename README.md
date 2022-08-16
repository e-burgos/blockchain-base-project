# Quick started Dapp/Next.js Project

You can see this [Demo](https://blockchain-base-project.vercel.app/) on vercel.

## The project

The main idea of this project is to use it as a frontend in Next.js base, to interact with one or several smart contracts defined within the project. It is necessary to make its corresponding deploy in hardhat to be consumed through this frontend. The entire boilerplate is already configured. Currently the project supports connecting to a wallet to start the communication between this frontend and the blockchain.

## Deploy your smart contract

1. Install all dependencies
   ```
   npm i
   ```
2. Follow this [tutorial](https://hardhat.org/tutorial) consider the goerli network
3. Update your contracts/.env file

   ```
   GOERLI_URL=https://eth-goerli.g.alchemy.com/v2/api-key
   PRIVATE_KEY=your-metamask-account-private-key
   ETHERSCAN_API_KEY=your-etherscan-api-key
   ```

### Usefull links

[Goerli Faucet](https://goerlifaucet.com/)

[Goerli Etherscan](https://goerli.etherscan.io/)

## Update your Next.js project

1. Install all dependencies

   ```
   npm i
   ```

2. Update your web/.env.local file

   ```
    NEXT_PUBLIC_API_URI=http://localhost:3000/
    NEXT_PUBLIC_CONTRACT_ADDRESS=your-contract-address
    NEXT_PUBLIC_INFURA_ID=your-infura-id
    NEXT_PUBLIC_GOERLI_URL=your-goerli-url-project
   ```

3. Run your project

   ```
   npm run dev
   ```

---

## Main tutorials and tools used

[Adding Web3 to Our NextJS TypeScript Project](https://betterprogramming.pub/adding-web3-to-our-nextjs-typescript-project-861e9ed5feaf)

[Web3Modal](https://github.com/WalletConnect/web3modal)

[WalletConnect docs](https://docs.walletconnect.com/)

[WalletConnect Web3 Provider](https://www.npmjs.com/package/@walletconnect/web3-provider)

[Material UI](https://mui.com/)

[Material UI templates](https://mui.com/material-ui/getting-started/templates/)
