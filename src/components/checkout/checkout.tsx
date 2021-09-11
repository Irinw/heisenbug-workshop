import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './address-form';
import PaymentForm from './payment-form';
import Review from './review';
import { CheckoutProps } from "./checkout.contracts";
import { Modal } from "@material-ui/core";
import {
    isShippingAddressFormFilled,
    isPaymentDetailsFormFilled,
    orderInfoSelector
} from "../../selectors/review-details-selector";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../configure-store";
import { OrderProcessing } from './order-processing';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translateY(-50%) translateX(-50%)'
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return <AddressForm />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <Review />;
        default:
            throw new Error('Unknown step');
    }
}

export default function Checkout(props: CheckoutProps) {
    const classes = useStyles();

    const step0done = useSelector(isShippingAddressFormFilled);
    const step1done = useSelector(isPaymentDetailsFormFilled);
    const [activeStep, setActiveStep] = React.useState(step0done ? step1done ? 2 : 1 : 0);

    const isNextButtonDisabled = (!step1done && activeStep === 1) || (!step0done && activeStep === 0);
    const orderInfo = useSelector(orderInfoSelector);
    const dispatch = useAppDispatch();

    const handleNext = () => {
        setActiveStep(activeStep + 1);
        if (activeStep === steps.length - 1) {
            dispatch({ type: 'SUBMIT_ORDER' })
        }
    };
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    const handleClose = () => {
        if (orderInfo.inProgress) return;
        props.hideCheckoutScreen();
    };

    return (
        <Modal
            open={true}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">
            <div className={classes.root}>
                <CssBaseline />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h4" align="center">
                            Checkout
                        </Typography>
                        <Stepper activeStep={activeStep} className={classes.stepper}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <React.Fragment>
                            {activeStep === steps.length ? (
                                <OrderProcessing {...orderInfo} />
                            ) : (
                                <React.Fragment>
                                    {getStepContent(activeStep)}
                                    <div className={classes.buttons}>
                                        {activeStep !== 0 && (
                                            <Button onClick={handleBack} className={classes.button}>
                                                Back
                                            </Button>
                                        )}
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            disabled={isNextButtonDisabled}
                                            className={classes.button}
                                        >
                                            {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                        </Button>
                                    </div>
                                </React.Fragment>
                            )}
                        </React.Fragment>
                    </Paper>
                </main>
            </div>
        </Modal>
    );
}