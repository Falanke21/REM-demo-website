import React from "react";

import Navigation from "./Navigation";
import ItemCard from "./ItemCard";
import tileData from "./tileData";
import BiddingDialog from "./BiddingDialog";

export default function ItemDetail({ match }) {
    const item = tileData.find(x => match.params.itemId === x.id);

    return (
        <div>
            <Navigation />
            <ItemCard item={item} />
            <BiddingDialog itemId={item.id}/>
        </div>
    );
}
