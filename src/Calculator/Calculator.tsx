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

    protected initialAmount: number;
    protected initialTerm: number;

    public constructor(props: CalculatorProps) {
        super(props);

        this.initialAmount = (props.amount.initial || Math.round((props.amount.min + props.amount.max) / 2));
        this.initialTerm = (!!props.term
            ? props.term.initial || Math.round((props.term.min + props.term.max) / 2)
            : 0);

        this.state = {
            amount: this.initialAmount,
            term: this.initialTerm,
        };
    }

    public getChildContext(): CalculatorContext {
        const term = (this.props.term && {
            max: this.props.term.max,
            min: this.props.term.min,
            step: this.props.term.step || 1,
            initial: this.initialTerm,
        }) || {max: 0, min: 0, step: 1, initial: 0};

        return {
            Conditions: {
                Term: term,
                Amount: {
                    min: this.props.amount.min,
                    max: this.props.amount.max,
                    step: 50,
                    initial: this.initialAmount,
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

    public render() {
        return this.props.children;
    }

    protected handleAmountChange = (nextAmount: number): number => {
        nextAmount = Math.max(this.props.amount.min, nextAmount);
        nextAmount = Math.min(this.props.amount.max, nextAmount);

        this.setState({amount: nextAmount});

        return nextAmount;
    };

    protected handleTermChange = (nextTerm: number): number => {
        if (this.props.term === undefined) {
            return;
        }

        nextTerm = Math.max(this.props.term.min, nextTerm);
        nextTerm = Math.min(this.props.term.max, nextTerm);

        this.setState({term: nextTerm});
        return nextTerm;
    };
}
