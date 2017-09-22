/// <reference types="react" />
import * as React from "react";
import * as PropTypes from "prop-types";
import { CalculatorLabelProps } from "./CalculatorLabelProps";
import { CalculatorLabelContext } from "./CalculatorLabelContext";
export declare class CalculatorLabel extends React.Component<CalculatorLabelProps, undefined> {
    static readonly propTypes: {
        labelType: PropTypes.Requireable<any>;
    };
    static readonly contextTypes: {
        Credit: PropTypes.Validator<any>;
    };
    readonly context: CalculatorLabelContext;
    render(): JSX.Element;
    protected readonly children: number;
}
