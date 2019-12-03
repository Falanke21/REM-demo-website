import { setState, getState } from "statezero";

export const getAllTransactions = () => {
    const url = "http://localhost:3001/api/transaction";
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
    const request = new Request(`http://localhost:3001/api/transaction/${id}`, {
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
                console.log("Cannot update user");
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
    const request = new Request(`http://localhost:3001/api/transaction/${id}`, {
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
                console.log("Cannot update user");
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