import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import CardComponent from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import {Fab} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {CardProps} from './card.contracts';
import {useAppDispatch} from "../../index";
import {addPurchase, removePurchase} from "../../slices/purchase.slice";
import {useSelector} from "react-redux";
import {MAX_COUNT_OF_PURCHASES} from "../../constants/app.constants";
import {numberOfPurchasesSelector, purchasesSelector} from "../../selectors/purchase-selector";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
            marginTop: 20,
            minWidth: 345,
            display: 'flex',
            flexDirection: 'column'
        },
        cardContent: {
            flex: '1 1 auto'
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
        actionContainer: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
        actionText: {
            margin: 10
        }
    }),
);

export default function Card(props: CardProps) {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const purchases = useSelector(purchasesSelector);
    const countOfPurchases = purchases.filter(purchase => purchase.id === props.id)?.length;
    const totalCountOfPurchases = useSelector(numberOfPurchasesSelector);
    const isAddButtonDisabled = totalCountOfPurchases >= MAX_COUNT_OF_PURCHASES;

    const addPurchaseCallback = () => {
        dispatch(addPurchase(props));
    };

    const removePurchaseCallback = () => {
        dispatch(removePurchase(props));
    };

    const price = `$${props.price}`;
    const showShoppingCart = countOfPurchases === 0;

    return (
        <CardComponent
            key={props.id}
            className={classes.root}
        >
            <CardHeader
                title={props.name}
                subheader={price}
            />
            <CardMedia
                className={classes.media}
                image={props.image?.url || 'cat1.jpg'}
                title="Paella dish"
            />
            <CardContent className={classes.cardContent}>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.temperament}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.actionContainer}>
                {showShoppingCart &&
                <IconButton
                    aria-label="add to favorites"
                    onClick={addPurchaseCallback}
                    disabled={ isAddButtonDisabled }
                >
                    <ShoppingCart/>
                </IconButton>
                }
                {!showShoppingCart &&
                <>
                    <Fab
                        size="small"
                        color="primary"
                        aria-label="add"
                        onClick={addPurchaseCallback}
                        disabled={ isAddButtonDisabled }
                    >
                        <AddIcon/>
                    </Fab>
                    <Typography
                        className={classes.actionText}
                        variant="overline"
                        display="block"
                        gutterBottom
                    >
                        { countOfPurchases } cats
                    </Typography>
                    <Fab size="small" color="primary" aria-label="remove" onClick={removePurchaseCallback}>
                        <RemoveIcon/>
                    </Fab>
                </>
                }
            </CardActions>
        </CardComponent>
    );

}
