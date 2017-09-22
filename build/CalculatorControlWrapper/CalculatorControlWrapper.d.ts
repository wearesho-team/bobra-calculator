/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
import { CalculatorControlWrapperProps } from "./CalculatorControlWrapperProps";
import { CalculatorControlWrapperContext } from "./CalculatorControlWrapperContext";
import { CalculatorContext } from "../Calculator/CalculatorContext";
export declare class CalculatorControlWrapper extends React.Component<CalculatorControlWrapperProps> {
    static readonly propTypes: {
        type: PropTypes.Validator<any>;
        children: PropTypes.Validator<any>;
    };
    static readonly contextTypes: {
        Credit: PropTypes.Validator<any>;
        Conditions: PropTypes.Requireable<any>;
        onAmountChange: PropTypes.Validator<any>;
        onTermChange: PropTypes.Validator<any>;
    };
    static readonly childContextTypes: {
        Conditions: PropTypes.Validator<any>;
        calculationValue: PropTypes.Validator<any>;
        onCalculationChange: PropTypes.Validator<any>;
    };
    readonly context: CalculatorContext;
    getChildContext(): CalculatorControlWrapperContext;
    render(): JSX.Element;
    protected readonly handleCalculationChange: (nextAmount: number) => void;
}
