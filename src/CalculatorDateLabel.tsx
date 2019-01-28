import * as React from "react";

import { CalculatorContext, CalculatorContextValue } from "./CalculatorContext";

export interface CalculatorDateLabelProps {
    format?: (date: Date) => string,
}

function getLabelChildren(value: CalculatorContextValue, format?: (date: Date) => string): string {
    const returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + value.term.value);

    return format ? format(returnDate) : returnDate.toLocaleDateString("en-US");
}

export const CalculatorDateLabel: React.FunctionComponent<CalculatorDateLabelProps> = ({ format, ...childProps }) => {
    return (
        <CalculatorContext.Consumer>
            {(value) => (
                <span aria-label="return-date" {...childProps}>{getLabelChildren(value, format)}</span>
            )}
        </CalculatorContext.Consumer>
    );
};
