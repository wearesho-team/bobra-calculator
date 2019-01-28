import * as React from "react";

import { CalculatorContext, CalculatorContextValue } from "./CalculatorContext";

export enum CalculatorLabelTypes {
    term = "term",
    total = "total",
    amount = "amount",
    interest = "interest",
}

export interface CalculatorLabelProps extends React.HTMLProps<HTMLSpanElement> {
    labelType: CalculatorLabelTypes;
}

function getLabelChildren(labelType: CalculatorLabelTypes, value: CalculatorContextValue): string | number {
    switch (labelType) {
        case CalculatorLabelTypes.amount:
            return value.amount.value;
        case CalculatorLabelTypes.interest:
            return value.interest.amount;
        case CalculatorLabelTypes.term:
            return value.term.value;
        case CalculatorLabelTypes.total:
            return Math.round(value.amount.value + value.interest.amount);
    }
}

export const CalculatorLabel: React.FunctionComponent<CalculatorLabelProps> = ({ labelType, ...childProps }) => {
    return (
        <CalculatorContext.Consumer>
            {(value) => (
                <span aria-label={labelType} {...childProps}>{getLabelChildren(labelType, value)}</span>
            )}
        </CalculatorContext.Consumer>
    );
};
