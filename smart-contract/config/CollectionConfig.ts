import CollectionConfigInterface from '../lib/CollectionConfigInterface'
import whitelistAddresses from './whitelist.json'

const CollectionConfig: CollectionConfigInterface = {
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'MyNftToken',
  tokenName: 'My NFT Token',
  tokenSymbol: 'MNT',
  hiddenMetadataUri: 'ipfs://__CID__/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.09,
    maxMintAmountPerTx: 5,
  },
  contractAddress: '0xD66326Bdd4390d1234D7Db8aCba6C568b9E7484C',
  openSeaSlug: 'my-nft-token',
  whitelistAddresses: whitelistAddresses,
}

export default CollectionConfig
