import {ethers} from 'ethers';
import {config} from './config.js';

export const marketplaceSaleTopic = "0x968d1942d9971cb9c45c722957d854c38f327206399d12ae49ca2f9c5dd06fda";

export const axieTokenAddress: ethers.AddressLike = "0x32950db2a7164aE833121501C797D79E7B79d74C"
export const marketplaceAddress: ethers.AddressLike = ethers.getAddress("0xfff9ce5f71ca6178d3beecedb61e7eff1602950e");

export const provider = new ethers.JsonRpcProvider(`${config.RPC_URL}?apikey=${config.SKY_MAVIS_API_KEY}`);

export const marketplaceContract = new ethers.Contract(marketplaceAddress, [{
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "bool", "name": "", "type": "bool"}],
    "name": "AllowedAllPaymentTokens",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "uint8", "name": "version", "type": "uint8"}],
    "name": "Initialized",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "string[]",
        "name": "interfaces",
        "type": "string[]"
    }, {"indexed": false, "internalType": "address[]", "name": "addresses", "type": "address[]"}],
    "name": "InterfacesUpdated",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "contract IKatanaRouter",
        "name": "KatanaRouterContract",
        "type": "address"
    }],
    "name": "KatanaRouterUpdated",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "bool", "name": "referralFeature", "type": "bool"}, {
        "indexed": false,
        "internalType": "contract IMarketCommission",
        "name": "marketCommission",
        "type": "address"
    }, {"indexed": false, "internalType": "bool", "name": "autoTransferReferralReward", "type": "bool"}],
    "name": "MarketCommissionConfigUpdated",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "minMarketFeePercentage", "type": "uint256"}],
    "name": "MinMarketFeePercentageUpdated",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address[]",
        "name": "tokens",
        "type": "address[]"
    }, {"indexed": false, "internalType": "bool", "name": "allowed", "type": "bool"}],
    "name": "PaymentTokensAllowed",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "indexed": true,
        "internalType": "bytes32",
        "name": "previousAdminRole",
        "type": "bytes32"
    }, {"indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32"}],
    "name": "RoleAdminChanged",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "sender", "type": "address"}],
    "name": "RoleGranted",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "sender", "type": "address"}],
    "name": "RoleRevoked",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "", "type": "address"}],
    "name": "TreasuryUpdated",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "contract IWRON",
        "name": "wronContract",
        "type": "address"
    }, {"indexed": false, "internalType": "contract IWRONHelper", "name": "wronHelper", "type": "address"}],
    "name": "WRONConfigUpdated",
    "type": "event"
}, {"stateMutability": "payable", "type": "fallback"}, {
    "inputs": [],
    "name": "DEFAULT_ADMIN_ROLE",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "DOMAIN_SEPARATOR",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "WRON",
    "outputs": [{"internalType": "contract IWRON", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "allowedAllPaymentTokens",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "token", "type": "address"}],
    "name": "allowedPaymentToken",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "string", "name": "interfaceName", "type": "string"}],
    "name": "getInterface",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "getMarketCommissionConfig",
    "outputs": [{
        "internalType": "bool",
        "name": "referralFeature",
        "type": "bool"
    }, {
        "internalType": "contract IMarketCommission",
        "name": "marketCommission",
        "type": "address"
    }, {"internalType": "bool", "name": "autoTransferReferralReward", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}],
    "name": "getRoleAdmin",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
    }],
    "name": "getRoleMember",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}],
    "name": "getRoleMemberCount",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "internalType": "address",
        "name": "account",
        "type": "address"
    }], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "internalType": "address",
        "name": "account",
        "type": "address"
    }],
    "name": "hasRole",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "contract IWRON",
        "name": "wronContract",
        "type": "address"
    }, {"internalType": "contract IWRONHelper", "name": "wronHelper", "type": "address"}, {
        "internalType": "bool",
        "name": "allowedAllPaymentTokens",
        "type": "bool"
    }, {
        "internalType": "bool",
        "name": "referralFeature",
        "type": "bool"
    }, {
        "internalType": "contract IMarketCommission",
        "name": "marketCommission",
        "type": "address"
    }, {"internalType": "bool", "name": "autoTransferReferralReward", "type": "bool"}, {
        "internalType": "address[]",
        "name": "paymentTokens",
        "type": "address[]"
    }, {"internalType": "string[]", "name": "interfaces", "type": "string[]"}, {
        "internalType": "address[][2]",
        "name": "addresses",
        "type": "address[][2]"
    }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "string", "name": "interfaceName", "type": "string"}, {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
    }], "name": "interactWith", "outputs": [], "stateMutability": "payable", "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "internalType": "address",
        "name": "account",
        "type": "address"
    }], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "internalType": "address",
        "name": "account",
        "type": "address"
    }], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "bool", "name": "flag", "type": "bool"}],
    "name": "setAllowedAllPaymentTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "string[]", "name": "interfaces", "type": "string[]"}, {
        "internalType": "address[]",
        "name": "addresses",
        "type": "address[]"
    }], "name": "setInterfaces", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "contract IKatanaRouter", "name": "routerContract", "type": "address"}],
    "name": "setKatanaRouter",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "bool",
        "name": "referralFeature",
        "type": "bool"
    }, {
        "internalType": "contract IMarketCommission",
        "name": "marketCommission",
        "type": "address"
    }, {"internalType": "bool", "name": "autoTransferReferralReward", "type": "bool"}],
    "name": "setMarketCommissionConfig",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address[]", "name": "tokens", "type": "address[]"}, {
        "internalType": "bool",
        "name": "allowed",
        "type": "bool"
    }], "name": "setPaymentTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{
        "internalType": "contract IWRON",
        "name": "wronAddr",
        "type": "address"
    }, {"internalType": "contract IWRONHelper", "name": "wronHelperAddr", "type": "address"}],
    "name": "setWRONConfig",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes4", "name": "interfaceId", "type": "bytes4"}],
    "name": "supportsInterface",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "wronHelper",
    "outputs": [{"internalType": "contract IWRONHelper", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {"stateMutability": "payable", "type": "receive"}], provider);

export const orderExchangeAddress = await marketplaceContract.getInterface("ORDER_EXCHANGE");

export const orderExchangeContract = new ethers.Contract(orderExchangeAddress, [{
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "uint8", "name": "version", "type": "uint8"}],
    "name": "Initialized",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "maker", "type": "address"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "nonce",
        "type": "uint256"
    }],
    "name": "MakerNonceUpdated",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "bytes32", "name": "", "type": "bytes32"}, {
        "indexed": false,
        "internalType": "address",
        "name": "requester",
        "type": "address"
    }],
    "name": "OrderCancelled",
    "type": "event"
}, {
    "anonymous": false, "inputs": [{
        "components": [{
            "components": [{
                "internalType": "address",
                "name": "maker",
                "type": "address"
            }, {
                "internalType": "enum OrderKind",
                "name": "kind",
                "type": "uint8"
            }, {
                "components": [{
                    "internalType": "enum TokenStandard",
                    "name": "erc",
                    "type": "uint8"
                }, {"internalType": "address", "name": "addr", "type": "address"}, {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }, {"internalType": "uint256", "name": "quantity", "type": "uint256"}],
                "internalType": "struct Asset[]",
                "name": "assets",
                "type": "tuple[]"
            }, {"internalType": "uint256", "name": "expiredAt", "type": "uint256"}, {
                "internalType": "address",
                "name": "paymentToken",
                "type": "address"
            }, {"internalType": "uint256", "name": "startedAt", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "baseUnitPrice",
                "type": "uint256"
            }, {"internalType": "uint256", "name": "endedAt", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "endedUnitPrice",
                "type": "uint256"
            }, {"internalType": "uint256", "name": "expectedState", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "nonce",
                "type": "uint256"
            }, {"internalType": "bytes32", "name": "hash", "type": "bytes32"}, {
                "internalType": "bool",
                "name": "verified",
                "type": "bool"
            }], "internalType": "struct GenericOrder", "name": "info", "type": "tuple"
        }, {"internalType": "uint256", "name": "realPrice", "type": "uint256"}, {
            "internalType": "bytes",
            "name": "extraData",
            "type": "bytes"
        }, {"internalType": "address", "name": "recipient", "type": "address"}, {
            "internalType": "address",
            "name": "refunder",
            "type": "address"
        }], "indexed": false, "internalType": "struct GenericOrderExtended", "name": "order", "type": "tuple"
    }, {"indexed": false, "internalType": "uint256", "name": "settlePrice", "type": "uint256"}, {
        "indexed": false,
        "internalType": "address",
        "name": "settleToken",
        "type": "address"
    }, {"indexed": false, "internalType": "address", "name": "matcher", "type": "address"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "acceptedSettlePrice",
        "type": "uint256"
    }, {
        "components": [{
            "internalType": "enum IMarketCommission.AllocType",
            "name": "allocType",
            "type": "uint8"
        }, {"internalType": "address payable", "name": "recipient", "type": "address"}, {
            "internalType": "address",
            "name": "owner",
            "type": "address"
        }, {"internalType": "uint256", "name": "ratio", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }],
        "indexed": false,
        "internalType": "struct IMarketCommission.Allocation[]",
        "name": "receivedAllocs",
        "type": "tuple[]"
    }], "name": "OrderMatched", "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "indexed": true,
        "internalType": "bytes32",
        "name": "previousAdminRole",
        "type": "bytes32"
    }, {"indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32"}],
    "name": "RoleAdminChanged",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "sender", "type": "address"}],
    "name": "RoleGranted",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "sender", "type": "address"}],
    "name": "RoleRevoked",
    "type": "event"
}, {
    "inputs": [],
    "name": "DEFAULT_ADMIN_ROLE",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "MARKET_OPERATOR",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes", "name": "orderData", "type": "bytes"}],
    "name": "cancelOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}],
    "name": "getRoleAdmin",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
    }],
    "name": "getRoleMember",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}],
    "name": "getRoleMemberCount",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "components": [{
            "internalType": "enum TokenStandard",
            "name": "erc",
            "type": "uint8"
        }, {"internalType": "address", "name": "addr", "type": "address"}, {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "quantity", "type": "uint256"}],
        "internalType": "struct Asset[]",
        "name": "assets",
        "type": "tuple[]"
    }],
    "name": "getState",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "internalType": "address",
        "name": "account",
        "type": "address"
    }], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "internalType": "address",
        "name": "account",
        "type": "address"
    }],
    "name": "hasRole",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "increaseNonceMaker",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "interfaceName",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "maker", "type": "address"}],
    "name": "makerNonce",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "hash", "type": "bytes32"}],
    "name": "orderFinalized",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "hash", "type": "bytes32"}, {
        "internalType": "bytes",
        "name": "orderData",
        "type": "bytes"
    }],
    "name": "orderValid",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "internalType": "address",
        "name": "account",
        "type": "address"
    }], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "internalType": "address",
        "name": "account",
        "type": "address"
    }], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{
        "components": [{
            "internalType": "bytes",
            "name": "orderData",
            "type": "bytes"
        }, {"internalType": "bytes", "name": "signature", "type": "bytes"}, {
            "internalType": "address",
            "name": "referralAddr",
            "type": "address"
        }, {"internalType": "uint256", "name": "expectedState", "type": "uint256"}, {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
        }, {"internalType": "address", "name": "refunder", "type": "address"}],
        "internalType": "struct SettleParameter",
        "name": "settleInfo",
        "type": "tuple"
    }, {"internalType": "uint256", "name": "settlePrice", "type": "uint256"}],
    "name": "settleOrder",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes4", "name": "interfaceId", "type": "bytes4"}],
    "name": "supportsInterface",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "components": [{
            "internalType": "bytes",
            "name": "orderData",
            "type": "bytes"
        }, {"internalType": "bytes", "name": "signature", "type": "bytes"}, {
            "internalType": "address",
            "name": "referralAddr",
            "type": "address"
        }, {"internalType": "uint256", "name": "expectedState", "type": "uint256"}, {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
        }, {"internalType": "address", "name": "refunder", "type": "address"}],
        "internalType": "struct SettleParameter",
        "name": "settleInfo",
        "type": "tuple"
    }, {"internalType": "uint256", "name": "deadline", "type": "uint256"}, {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
    }], "name": "swapRONAndSettleOrder", "outputs": [], "stateMutability": "payable", "type": "function"
}, {
    "inputs": [{
        "components": [{
            "internalType": "bytes",
            "name": "orderData",
            "type": "bytes"
        }, {"internalType": "bytes", "name": "signature", "type": "bytes"}, {
            "internalType": "address",
            "name": "referralAddr",
            "type": "address"
        }, {"internalType": "uint256", "name": "expectedState", "type": "uint256"}, {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
        }, {"internalType": "address", "name": "refunder", "type": "address"}],
        "internalType": "struct SettleParameter",
        "name": "settleInfo",
        "type": "tuple"
    }, {"internalType": "uint256", "name": "settlePrice", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
    }, {"internalType": "address[]", "name": "path", "type": "address[]"}],
    "name": "swapTokensAndSettleOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes32[]", "name": "hashList", "type": "bytes32[]"}],
    "name": "tryBulkCancelOrderByHash",
    "outputs": [{"internalType": "bool[]", "name": "orderAlreadyFinalized", "type": "bool[]"}],
    "stateMutability": "nonpayable",
    "type": "function"
}], provider);


