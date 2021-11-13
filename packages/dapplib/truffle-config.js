require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner enroll bundle food edge renew pitch unique grace sister army gesture'; 
let testAccounts = [
"0x3b2d535d3728a01eb850708b57fb66d1816a5eefbf8d13cf547f6aaf6bf3486b",
"0x0eea6b4f25c7b6f2c0157574696a90bc2cb3ff3dea9efcc791888ae25afff5e3",
"0x87a7dd0f57c068ea83c83a6cc453da98d5e2a96fc6905be6eee67cc0a79941c6",
"0xfa01f6d469c88176e251647d0f0aca5b2e7f724c6de74fdb420855c96708c65a",
"0xb09f9edf59ef8a60faf88b24a27de1e0b5db618d1a15f79ee2bad0e526eab459",
"0x26eeb2b9725facf42ca0cc63fa39789bf1af18eb53163326a68bf39d987d791f",
"0x7c85dda89767e81c9b8f7c0600638be06edf2e684b46a4a01c73b1a8662652c5",
"0x064379566bb830a4fe24ab874c629fe972c49348452dd99df034e50655eb5c9a",
"0xfb6279b93a9369ecc55795465f37af25ed6cdb6b39fe6c17999ec4d085991da8",
"0x17c0495ef79a0e1659f75d7f77970ea0cea596cc87b286ee6369145b6ad95775"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

