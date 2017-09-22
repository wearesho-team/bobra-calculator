/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
import { CalculatorControlWrapperContext } from "../CalculatorControlWrapper/CalculatorControlWrapperContext";
import { CalculatorButtonProps } from "./CalculatorButtonProps";
export declare class CalculatorButton extends React.Component<CalculatorButtonProps, undefined> {
    static readonly contextTypes: {
        Conditions: PropTypes.Validator<any>;
        calculationValue: PropTypes.Validator<any>;
        onCalculationChange: PropTypes.Validator<any>;
    };
    static readonly propTypes: {
        increase: PropTypes.Validator<any>;
    };
    readonly context: CalculatorControlWrapperContext;
    readonly isDisabled: boolean;
    render(): JSX.Element;
    protected handleClick: () => void;
}
