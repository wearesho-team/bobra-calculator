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

export class Controller extends React.PureComponent<ControllerProps, ControllerState> {
    public readonly state: ControllerState = {
        term: this.props.term.initial || Math.round((this.props.term.min + this.props.term.max) / 2),
        amount: this.props.amount.initial || Math.round((this.props.amount.min + this.props.amount.max) / 2),
    };

    public get interest(): { amount: number, rate: number } {
        return {
            amount: Math.round(this.state.term * this.props.interestRate * this.state.amount),
            rate: this.props.interestRate,
        };
    }

    public render() {
        return <Context.Provider value={this.contextValue} children={this.props.children}/>
    }

    protected get contextValue(): ContextValue {
        return {
            amount: {
                value: this.state.amount,
                min: this.props.amount.min,
                max: this.props.amount.max,
                step: this.props.amount.step,
                onChange: this.handleAmountChange,
            },
            term: {
                value: this.state.term,
                min: this.props.amount.min,
                max: this.props.amount.max,
                step: this.props.amount.step,
                onChange: this.handleTermChange,
            },
            interest: this.interest,
        };
    }

    protected handleAmountChange = (nextAmount: number): number => {
        nextAmount = Math.max(this.props.amount.min, nextAmount);
        nextAmount = Math.min(this.props.amount.max, nextAmount);

        this.setState({ amount: nextAmount });

        return nextAmount;
    };

    protected handleTermChange = (nextTerm: number): number => {
        if (this.props.term === undefined) {
            return;
        }

        nextTerm = Math.max(this.props.term.min, nextTerm);
        nextTerm = Math.min(this.props.term.max, nextTerm);

        this.setState({ term: nextTerm });
        return nextTerm;
    };
}
