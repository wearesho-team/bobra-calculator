import * as React from "react";

import { Context, ContextValue } from "./Context";

export enum LabelType {
    term = "term",
    total = "total",
    amount = "amount",
    interest = "interest",
    minAmount = "minAmount",
    maxAmount = "maxAmount",
    minTerm = "minTerm",
    maxTerm = "maxTerm",
}

export interface LabelProps extends React.HTMLProps<HTMLSpanElement> {
    labelType: LabelType;
}

function getLabelChildren(labelType: LabelType, value: ContextValue): string | number {
    switch (labelType) {
        case LabelType.amount:
            return value.amount.value;
        case LabelType.interest:
            return value.interest.amount;
        case LabelType.term:
            return value.term.value;
        case LabelType.total:
            return Math.round(value.amount.value + value.interest.amount);
        case LabelType.minAmount:
            return value.amount.min;
        case LabelType.maxAmount:
            return value.amount.max;
        case LabelType.minTerm:
            return value.term.min;
        case LabelType.maxTerm:
            return value.term.max;
    }
}

export const Label: React.FunctionComponent<LabelProps> = ({ labelType, ...childProps }) => {
    const context = React.useContext(Context);
    return <span aria-label={labelType} {...childProps}>{getLabelChildren(labelType, context)}</span>;
};
