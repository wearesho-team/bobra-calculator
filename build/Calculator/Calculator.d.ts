/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
import { CalculatorProps } from "./CalculatorProps";
import { CalculatorContext } from "./CalculatorContext";
export interface CalculatorState {
    term: number;
    amount: number;
}
export declare class Calculator extends React.Component<CalculatorProps, any> {
    static readonly propTypes: {
        interest: PropTypes.Validator<any>;
        amount: PropTypes.Validator<any>;
        term: PropTypes.Requireable<any>;
        onAmountChange: PropTypes.Requireable<any>;
        onTermChange: PropTypes.Requireable<any>;
        children: PropTypes.Validator<any>;
    };
    static readonly childContextTypes: {
        Credit: PropTypes.Validator<any>;
        Conditions: PropTypes.Requireable<any>;
        onAmountChange: PropTypes.Validator<any>;
        onTermChange: PropTypes.Validator<any>;
    };
    state: CalculatorState;
    protected initialAmount: number;
    protected initialTerm: number;
    constructor(props: CalculatorProps);
    getChildContext(): CalculatorContext;
    readonly term: number;
    readonly amount: number;
    readonly interest: number;
    render(): JSX.Element;
    protected handleAmountChange: (nextAmount: number) => number;
    protected handleTermChange: (nextTerm: number) => number;
}
