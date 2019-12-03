import { setState } from "statezero";

import config from "../config.json";

const urlPrefix = config.prefix;

export const getAllTransactions = () => {
    const url = urlPrefix + "/api/transaction";
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.transactions) {
                setState("adminTransactionList", json.transactions);
            } else {
                return Promise.reject();
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const updateTransaction = (id, data) => {
    const { finalPrice } = data;
    const body = { finalPrice };
    const request = new Request(urlPrefix + `/api/transaction/${id}`, {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log("Cannot update transaction");
            }
        })
        .then(json => {
            console.log(json);
            getAllTransactions(); // refresh transaction list
        })
        .catch(error => {
            console.log(error);
        });
};

export const deleteTransaction = (id) => {
    const request = new Request(urlPrefix + `/api/transaction/${id}`, {
        method: "DELETE",
        // body: JSON.stringify(id),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log("Cannot update transaction");
            }
        })
        .then(json => {
            console.log(json);
            getAllTransactions(); // refresh transaction list
        })
        .catch(error => {
            console.log(error);
        });
}