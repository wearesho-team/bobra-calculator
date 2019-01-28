import * as React from "react";
import { CalculatorContext, CalculatorContextValue } from "./CalculatorContext";

export interface CalculatorSummaryButtonProps extends React.HTMLProps<HTMLButtonElement> {
    onSummary: (state: { term: number, amount: number }) => void;
}

export class CalculatorSummaryButton extends React.PureComponent<CalculatorSummaryButtonProps> {
    public static readonly contextType = CalculatorContext;
    public readonly context: CalculatorContextValue;

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
