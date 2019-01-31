import * as React from "react";
import { Context, ContextValue } from "./Context";

export interface SummaryButtonProps extends React.HTMLProps<HTMLButtonElement> {
    onSummary: (state: { term: number, amount: number }) => void;
}

export class SummaryButton extends React.PureComponent<SummaryButtonProps> {
    public static readonly contextType = Context;
    public readonly context: ContextValue;

    public render(): JSX.Element {
        const { onSummary, ...childProps } = this.props;

        return (
            <button
                type="button"
                {...childProps}
                onClick={this.handleClick}
            />
        );
    }

    protected handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        this.props.onClick && this.props.onClick(event);
        if (event.defaultPrevented) {
            return;
        }

        this.props.onSummary({
            term: this.context.term.value,
            amount: this.context.amount.value,
        });
    }
}
