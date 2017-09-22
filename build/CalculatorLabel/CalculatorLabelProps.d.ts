import * as React from "react";
import * as PropTypes from "prop-types";
export declare enum CalculatorLabelTypes {
    amount = "amount",
    term = "term",
    interest = "interest",
    total = "total",
}
export interface CalculatorLabelProps extends React.HTMLProps<HTMLSpanElement> {
    labelType: CalculatorLabelTypes;
}
export declare const CalculatorLabelPropTypes: {
    labelType: PropTypes.Requireable<any>;
};
