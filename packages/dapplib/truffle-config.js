require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food shoulder return rural million coral light army gentle'; 
let testAccounts = [
"0x7bb5ad68342ed781e146aa5e4262f8f62f3aa1f96fa62cca2fb459bf25adfb8c",
"0x3f46b3337055c84d7d62a112be9027236175a04cd9c846b38dc5d0141912f95f",
"0x73afbf99139ff8c9286771b6fac0ccbeafe77023d03fbe6941f766e2db137663",
"0x2317d28a1a7d06ab7fda65f0cbf96efbe177324bcbe2ec17bc7baae9cf58ab8d",
"0x71f2508d619f2293e458f8607a630f4cdec4ee2561e27b2e260d8b4252464732",
"0xc6c19a848bbc0fccfa09f23999354648b1c7c7120f9fa5babb378f8ab939c283",
"0x22d6896b0cb822569d631095fddbb1a59591f3f4bab050657deadcab2407b1f1",
"0x0cfebae720572315d18661c865202713fae7dd1761feb32b1a3a31b7ef9819ed",
"0xcace0651d9b0a73fe79158a21ffb48f4dacfb1aa22baaac5067b4206d64cd144",
"0x0afc4758932c6db961bae9bc0615babe3ce738a3120799d406a30c9619789dad"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

