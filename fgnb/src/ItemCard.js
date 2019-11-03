import React from "react";

import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export default function ItemCard(prop) {
    return (
        // Server call will be add to this page later
        <div>
            <br />
            <Container maxWidth="md">
                <Card>
                    <CardMedia image={prop.item.img} />
                    {
                        // material ui so irritating,
                        // no matter what I put in image attribute it just don't work
                        // had to add another img tag
                    }
                    <img alt={prop.item.title} src={prop.item.img}></img>
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="h2">
                            {prop.item.title}
                        </Typography>
                        <Typography variant="subtitle1" component="h5">
                            Price goes here
                        </Typography>
                        <Typography variant="subtitle1" component="h5">
                            Location goes here
                        </Typography>

                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Description goes here
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
            <br />
        </div>
    );
}
