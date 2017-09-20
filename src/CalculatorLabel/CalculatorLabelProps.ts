import * as React from "react";
import * as PropTypes from "prop-types";

export enum CalculatorLabelTypes {
    amount, term, interest, total,
}

export interface CalculatorLabelProps extends React.HTMLProps<HTMLSpanElement> {
    labelType: CalculatorLabelTypes,
}

export const CalculatorLabelPropTypes = {
    labelType: PropTypes.oneOf(Object.keys(CalculatorLabelTypes)),
};
