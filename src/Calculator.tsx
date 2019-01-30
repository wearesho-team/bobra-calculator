import * as React from "react";
import { CalculatorContext, CalculatorContextValue } from "./CalculatorContext";

export interface CalculatorState {
    term: number,
    amount: number,
    promocode?: {
        value: string;
        discount: number;
    };
}

export interface CalculatorProps {
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
    promocode?: string;

    onAmountChange?: (nextAmount: number) => void,
    onTermChange?: (nextTerm: number) => void,
}

export class Calculator extends React.PureComponent<CalculatorProps, CalculatorState> {
    public readonly state: CalculatorState = {
        term: this.props.term.initial || Math.round((this.props.term.min + this.props.term.max) / 2),
        amount: this.props.amount.initial || Math.round((this.props.amount.min + this.props.amount.max) / 2),
        promocode: this.props.promocode
            ? {
                value: this.props.promocode,
                discount: 0,
            }
            : undefined
    };

    public get interest(): { amount: number, rate: number } {
        let rate = this.props.interestRate;

        if (this.state.promocode) {
            rate = rate - rate * this.state.promocode.discount;
        }

        return {
            amount: Math.round(this.state.term * rate * this.state.amount),
            rate,
        };
    }

    public render() {
        return <CalculatorContext.Provider value={this.contextValue} children={this.props.children}/>
    }

    protected get contextValue(): CalculatorContextValue {
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
                min: this.props.term.min,
                max: this.props.term.max,
                step: this.props.term.step,
                onChange: this.handleTermChange,
            },
            interest: this.interest,
            promocode: {
                ...this.state.promocode,
                onChange: this.handlePromocodeChange,
            }
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

    protected handlePromocodeChange = (promocode?: { value: string; discount: number }) => {
        this.setState({ promocode });
    };
}
