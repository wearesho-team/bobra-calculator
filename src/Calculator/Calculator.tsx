import * as React from "react";
import * as PropTypes from "prop-types";
import {CalculatorProps, CalculatorPropTypes} from "./CalculatorProps";
import {CalculatorContext, CalculatorContextTypes} from "./CalculatorContext";

export interface CalculatorState {
    term: number,
    amount: number,
}

export class Calculator extends React.Component<CalculatorProps, any> {
    public static readonly propTypes = CalculatorPropTypes;
    public static readonly childContextTypes = CalculatorContextTypes;

    public state: CalculatorState;

    public constructor(props: CalculatorProps) {
        super(props);

        this.state = {
            amount: props.amount.initial || Math.round((props.amount.min + props.amount.max) / 2),
            term: (!!props.term
                ? props.term.initial || Math.round((props.term.min + props.term.max) / 2)
                : 0)
        };
    }

    public getChildContext(): CalculatorContext {
        const term = (this.props.term && {
            max: this.props.term.max,
            min: this.props.term.min,
            step: this.props.term.step || 1,
        }) || {max: 0, min: 0, step: 1};

        return {
            Conditions: {
                Term: term,
                Amount: {
                    min: this.props.amount.min,
                    max: this.props.amount.max,
                    step: 50,
                },
            },

            Credit: {
                term: this.term,
                amount: this.amount,
                interest: this.interest,
            },

            onAmountChange: this.handleAmountChange,
            onTermChange: this.handleTermChange,
        };
    }

    public get term(): number {
        return this.state.term;
    }

    public get amount(): number {
        return this.state.amount;
    }

    public get interest(): number {
        return Math.round(this.state.term * this.props.interest * this.state.amount);
    }

    public render(): JSX.Element {
        return this.props.children;
    }

    protected handleAmountChange(nextAmount: number): void {
        nextAmount = Math.max(this.props.amount.min, nextAmount);
        nextAmount = Math.min(this.props.amount.max, nextAmount);

        this.setState({amount: nextAmount});
    }

    protected handleTermChange(nextTerm: number): void {
        if (this.props.term === undefined) {
            return;
        }

        nextTerm = Math.max(this.props.term.min, nextTerm);
        nextTerm = Math.min(this.props.term.max, nextTerm);

        this.setState({term: nextTerm});
    }
}
