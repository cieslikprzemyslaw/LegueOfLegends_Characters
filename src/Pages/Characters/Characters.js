import React, { useState, useEffect } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import './useStyles.css';
import { Link } from 'react-router-dom';


const Characters = () => {

    const [dataset, setDataset] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)


    const url = 'http://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_GB/champion.json';

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                setDataset(json)
                setIsLoaded(true)
            })
    }, [url])

    const { data, version } = dataset

    const main = () => {
        // console.log(dataset)
        if (isLoaded) {
            const show = Object.values(data).map(champion => {
                const imageUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`
                return (
                    <Card className="Card" key={champion.id}>
                        <CardActionArea
                            component={Link} to={`/character/${champion.id}`}
                        >
                            <CardMedia
                                className="CardMedia"
                                image={imageUrl}
                                title={champion.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="h3">
                                    {`${champion.name} ${champion.title}`}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {champion.blurb}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                )
            })
            return show
        }
    }


    return (
        <div className="card-section">
            <h3>Path No. {version}</h3>
            <section>{main()}</section>
        </div>
    );
};

export default Characters;