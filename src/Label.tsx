import * as React from "react";

import { Context, ContextValue } from "./Context";

export enum LabelType {
    term = "term",
    total = "total",
    amount = "amount",
    interest = "interest",
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
    }
}

export const Label: React.FunctionComponent<LabelProps> = ({ labelType, ...childProps }) => {
    return (
        <Context.Consumer>
            {(value) => (
                <span aria-label={labelType} {...childProps}>{getLabelChildren(labelType, value)}</span>
            )}
        </Context.Consumer>
    );
};
