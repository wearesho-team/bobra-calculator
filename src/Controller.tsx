import * as React from "react";
import { Context, ContextValue } from "./Context";

export interface ControllerState {
    term: number,
    amount: number,
}

export interface ControllerProps {
    interestRate: number,
    amount: {
        max: number,
        min: number,
        initial?: number,
        step?: number,
    },
    term?: {
        max: number,
        min: number,
        initial?: number,
        step?: number,
    },
}

export const Controller: React.FC<ControllerProps> = (props) => {
    const [ term, setTerm ] = React.useState<number>(
        props.term
            ? props.term.initial || Math.round((props.term.min + props.term.max) / 2)
            : 1
    );
    const [ amount, setAmount ] = React.useState<number>(
        props.amount.initial || Math.round((props.amount.min + props.amount.max) / 2)
    );
    const interest: { amount: number, rate: number } = {
        amount: Math.round(term * props.interestRate * amount),
        rate: props.interestRate,
    };
    const handleAmountChange: (next: number) => number = React.useCallback((nextAmount) => {
        nextAmount = Math.max(props.amount.min, nextAmount);
        nextAmount = Math.min(props.amount.max, nextAmount);

        setAmount(nextAmount);

        return nextAmount;
    }, [ props.amount.min, props.amount.max, setAmount ]);
    const handleTermChange: (next: number) => number = React.useCallback((nextTerm) => {
        if (props.term === undefined) {
            return;
        }

        nextTerm = Math.max(props.term.min, nextTerm);
        nextTerm = Math.min(props.term.max, nextTerm);
        setTerm(nextTerm);

        return nextTerm;
    }, [ props.term, setTerm ]);

    const context: ContextValue = {
        amount: {
            value: amount,
            min: props.amount.min,
            max: props.amount.max,
            step: props.amount.step || 1,
            onChange: handleAmountChange,
        },
        term: {
            value: term,
            min: props.term ? props.term.min : 1,
            max: props.term ? props.term.max : 1,
            step: props.term ? props.term.step || 1 : 1,
            onChange: handleTermChange,
        },
        interest,
    };

    return <Context.Provider value={context} children={props.children}/>;
};
