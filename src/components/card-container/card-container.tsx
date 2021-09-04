import React from 'react';
import Card from "../card/card";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import {filteredCardsSelector} from "../../selectors/cards-selector";

const useStyles = makeStyles(() =>
    createStyles({
        cardContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
        }
    })
);

export default function CardContainer(props: any) {
    const classes = useStyles();
    const items = useSelector(filteredCardsSelector);

    if(!items || !items.length){
        return null;
    }

    return (
        <div className={classes.cardContainer}>
            {items.map(item =>
                <Card
                    {...item}
                />
            )}
        </div>
    );
}