import * as React from "react";
import * as PropTypes from "prop-types";

export enum CalculatorLabelTypes {
    term = "term",
    total = "total",
    amount = "amount",
    interest = "interest",
    returnDate = "returnDate"
}

export interface CalculatorLabelProps extends React.HTMLProps<HTMLSpanElement> {
    labelType: CalculatorLabelTypes;
    returnDateFormat?: (date: Date) => string;
}

export const CalculatorLabelPropTypes = {
    labelType: PropTypes.oneOf(Object.keys(CalculatorLabelTypes)),
    returnDateFormat: PropTypes.func
};
