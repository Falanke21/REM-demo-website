import React, { useState, useEffect } from "react";

import Navigation from "../navigation/Navigation";
import ItemCard from "./ItemCard";
import tileData from "../tileData";
import BiddingDialog from "./BiddingDialog";
import CurrentBiddings from "./CurrentBiddings";

export default function ItemDetail({ match }) {
    const [item, setItem] = useState({});
    const [biddings, setBiddings] = useState([])
    const itemId = match.params.itemId;
    useEffect(() => {
        fetch("/api/item/" + itemId, {
            method: "GET"
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    Promise.reject(
                        "Internal Server Errorrrrrrrrrrrrrrrrrrrrrrr"
                    );
                }
            })
            .then(json => {
                setItem(json.item);
                return fetch("/api/bidding/item/" + itemId, {
                    method: "GET"
                })
            })
            .then(biddingRes => {
                if (biddingRes.status === 200) {
                    return biddingRes.json();
                } else if (biddingRes.status === 401) {
                    return Promise.reject("Item sold");
                } else if (biddingRes.status === 404) {
                    return Promise.reject("Item not found");
                } else if (biddingRes.status === 500) {
                    return Promise.reject("Server internal error");
                } 
            })
            .then(biddingJson => {
                setBiddings(biddingJson.biddings);
            })
            .catch(err => {
                alert(err);
            });
    }, []);

    return (
        <div>
            <Navigation />
            <ItemCard item={item} />
            <BiddingDialog itemId={item._id} />
            <CurrentBiddings biddings={biddings} />
        </div>
    );
}
