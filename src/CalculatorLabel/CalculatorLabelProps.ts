import * as React from "react";
import * as PropTypes from "prop-types";

export enum CalculatorLabelTypes {
    amount = "amount",
    term = "term",
    interest = "interest",
    total = "total",
}

export interface CalculatorLabelProps extends React.HTMLProps<HTMLSpanElement> {
    labelType: CalculatorLabelTypes,
}

export const CalculatorLabelPropTypes = {
    labelType: PropTypes.oneOf(Object.keys(CalculatorLabelTypes)),
};
