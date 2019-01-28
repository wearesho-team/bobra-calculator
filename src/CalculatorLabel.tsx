import * as React from "react";

import { CalculatorContext, CalculatorContextValue } from "./CalculatorContext";

export enum CalculatorLabelType {
    term = "term",
    total = "total",
    amount = "amount",
    interest = "interest",
}

export interface CalculatorLabelProps extends React.HTMLProps<HTMLSpanElement> {
    labelType: CalculatorLabelType;
}

function getLabelChildren(labelType: CalculatorLabelType, value: CalculatorContextValue): string | number {
    switch (labelType) {
        case CalculatorLabelType.amount:
            return value.amount.value;
        case CalculatorLabelType.interest:
            return value.interest.amount;
        case CalculatorLabelType.term:
            return value.term.value;
        case CalculatorLabelType.total:
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
