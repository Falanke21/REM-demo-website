import { setState, getState } from "statezero";

export const getAllItems = () => {
    const url = "http://localhost:3001/api/item/admin";
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.items) {
                setState("adminItemList", json.items);
            } else {
                return Promise.reject();
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const updateItem = (id, data) => {
    const { title, price, description, location } = data;
    const body = { itemId: id, title, price, description, location };
    const request = new Request("http://localhost:3001/api/item", {
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
                console.log("Cannot update item");
            }
        })
        .then(json => {
            console.log(json);
            getAllItems(); // refresh item list
        })
        .catch(error => {
            console.log(error);
        });
};

export const deleteItem = id => {
    const body = { itemId: id };
    const request = new Request("http://localhost:3001/api/item/", {
        method: "DELETE",
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
                return Promise.reject();
            }
        })
        .then(json => {
            console.log(json);
            getAllItems(); // refresh item list
        })
        .catch(error => {
            console.log(error);
        });
};
