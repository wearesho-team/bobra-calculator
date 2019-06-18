import * as React from "react";

import { Context, ContextValue } from "./Context";

export interface DateLabelProps extends React.HTMLProps<HTMLSpanElement> {
    format?: (date: Date) => string,
}

function getLabelChildren(value: ContextValue, format?: (date: Date) => string): string {
    const returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + value.term.value);

    return format ? format(returnDate) : returnDate.toLocaleDateString("en-US");
}

export const DateLabel: React.FC<DateLabelProps> = ({ format, ...childProps }) => {
    const context = React.useContext(Context);
    return <span aria-label="return-date" {...childProps}>{getLabelChildren(context, format)}</span>;
};
