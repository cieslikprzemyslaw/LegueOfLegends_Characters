import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';

const CharacterPage = ({ match }) => {

    const [data, setData] = useState();
    const [isLoaded, setIsLoaded] = useState();

    const url = `http://ddragon.leagueoflegends.com/cdn/10.5.1/data/en_US/champion/${match.params.id}.json`
    const spellUrl = `http://ddragon.leagueoflegends.com/cdn/10.15.1/img/spell/`

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                setData(json)
                setIsLoaded(true)
            })
    }, [url])


    const showInfo = () => {
        if (isLoaded) {
            const showChampion = Object.values(data.data).map(champ => {

                const allyTips = (champ.allytips + " ").split(".").map(tips => <p>{tips}</p>)
                const enemyTips = (champ.enemytips + " ").split(".").map(tips => <p>{tips}</p>)

                return (
                    <>
                        <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_0.jpg`} alt={`${champ.name}`} />
                        <Typography variant="h2" component="h3">{champ.name}</Typography>
                        <Typography variant="h3" component="h4">{champ.title}</Typography>
                        <Typography variant="body1" component="span">{champ.lore}</Typography>
                        {allyTips.length !== 0 ? <Typography variant="h5" component="h6">Ally tips</Typography> : null}
                        {allyTips.length !== 0 ? <Typography variant="body2" component="span">{allyTips}</Typography> : null}
                        {enemyTips.length !== 0 ? <Typography variant="h5" component="h6">Enemy tips</Typography> : null}
                        {enemyTips.length !== 0 ? <Typography variant="body2" component="span">{enemyTips}</Typography> : null}
                    </>
                )
            })
            return showChampion
        }
    }

    const showSpells = () => {
        if (isLoaded) {
            const spells = Object.values(data.data).map(championInfo => {
                const spell = Object.values(championInfo.spells).map(spell => {
                    // console.log(spell)
                    return (
                        <div className="spells">
                            <img className="spells__image" src={spellUrl + spell.image.full} alt={spell.name} onClick={() => console.log("clicked")} />
                    <Typography className="spells__title" variant="body1" component="span">{spell.name}</Typography>
                    <Typography className="spells__description" variant="body1" component="span">{spell.description}</Typography>
                        </div>

                    )
                })
                return spell;
            }
            )
            return spells;
        }
    }

    return (
        <div>
            {showInfo()}
            {showSpells()}
        </div>
    );
};

export default CharacterPage;