//
// requires jquery
//
// http://34.205.26.12:8685/
// https://testnet.nebulas.io/
//
// https://github.com/nebulasio/wiki/blob/master/rpc.md

"use strict";

var api = {

    getUserGetGasPrice: function () {
        var apiPrefix = localStorage.apiPrefix || "https://testnet.nebulas.io/";

        return $.ajax({
            type: "get",
            url: apiPrefix + "v1/user/getGasPrice"
        });
    },

    postUserAccountState: function (addr, block) {
        var apiPrefix = localStorage.apiPrefix || "https://testnet.nebulas.io/";

        return $.ajax({
            data: JSON.stringify({ address: addr, block: block }),
            type: "post",
            url: apiPrefix + "v1/user/accountstate"
        });
    },

    postUserGetTransactionReceipt: function (tx) {
        var apiPrefix = localStorage.apiPrefix || "https://testnet.nebulas.io/";

        return $.ajax({
            data: JSON.stringify({ hash: tx }),
            type: "post",
            url: apiPrefix + "v1/user/getTransactionReceipt"
        });
    },

    postUserRawTransaction: function (txProtoString) {
        var apiPrefix = localStorage.apiPrefix || "https://testnet.nebulas.io/";

        return $.ajax({
            data: JSON.stringify({ data: txProtoString }),
            type: "post",
            url: apiPrefix + "v1/user/rawtransaction"
        });
    }

};
