/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
import { CalculatorControlWrapperContext } from "../CalculatorControlWrapper/CalculatorControlWrapperContext";
export declare class CalculatorInput extends React.Component<React.HTMLProps<HTMLInputElement>, undefined> {
    static readonly contextTypes: {
        Conditions: PropTypes.Validator<any>;
        calculationValue: PropTypes.Validator<any>;
        onCalculationChange: PropTypes.Validator<any>;
    };
    readonly context: CalculatorControlWrapperContext;
    protected input: HTMLInputElement;
    componentDidUpdate(): void;
    render(): JSX.Element;
    protected handleBlur: (event: React.FormEvent<HTMLInputElement>) => void;
    protected handleInput: (event: React.FormEvent<HTMLInputElement>) => void;
    protected inputRef: (input: HTMLInputElement) => HTMLInputElement;
}
