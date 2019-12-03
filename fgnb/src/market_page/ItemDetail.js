import React, { useState, useEffect } from "react";

import Navigation from "../navigation/Navigation";
import ItemCard from "./ItemCard";
import tileData from "../tileData";
import BiddingDialog from "./BiddingDialog";
import CurrentBiddings from "./CurrentBiddings";

export default function ItemDetail({ match }) {
    const [item, setItem] = useState({});
    const itemId = match.params.itemId;
    useEffect(() => {
        fetch("http://localhost:3001/api/item/" + itemId, {
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
            <CurrentBiddings item={item} />
        </div>
    );
}
