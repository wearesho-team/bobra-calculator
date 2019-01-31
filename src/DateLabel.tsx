import * as React from "react";

import { Context, ContextValue } from "./Context";

export interface DateLabelProps {
    format?: (date: Date) => string,
}

function getLabelChildren(value: ContextValue, format?: (date: Date) => string): string {
    const returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + value.term.value);

    return format ? format(returnDate) : returnDate.toLocaleDateString("en-US");
}

export const DateLabel: React.FunctionComponent<DateLabelProps> = ({ format, ...childProps }) => {
    return (
        <Context.Consumer>
            {(value) => (
                <span aria-label="return-date" {...childProps}>{getLabelChildren(value, format)}</span>
            )}
        </Context.Consumer>
    );
};
