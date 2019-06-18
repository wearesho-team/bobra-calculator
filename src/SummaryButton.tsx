import * as React from "react";
import { Context, ContextValue } from "./Context";

export interface SummaryButtonProps extends React.HTMLProps<HTMLButtonElement> {
    onSummary: (state: { term: number, amount: number }) => void;
}

export const SummaryButton: React.FC<SummaryButtonProps> = ({ onSummary, ...childProps }) => {
    const context = React.useContext(Context);
    const handleClick = React.useCallback((event: React.MouseEvent<HTMLButtonElement>): void => {
        childProps.onClick && childProps.onClick(event);
        if (event.defaultPrevented) {
            return;
        }

        onSummary({
            term: context.term.value,
            amount: context.amount.value,
        });
    }, [ childProps.onClick, onSummary, context.term.value, context.amount.value ]);

    return (
        <button
            type="button"
            {...childProps}
            onClick={handleClick}
        />
    );
};
