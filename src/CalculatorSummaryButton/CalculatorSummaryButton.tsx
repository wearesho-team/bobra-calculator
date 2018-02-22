import * as React from "react";
import * as PropTypes from "prop-types";

import {
    CalculatorContext,
    CalculatorContextTypes
} from "../Calculator";

export interface CalculatorSummaryButtonProps extends React.HTMLProps<HTMLButtonElement> {
    onSummary: (state: { term: number, amount: number }) => void;
}

export const CalculatorSummaryButtonPropTypes:
    {[P in keyof CalculatorSummaryButtonProps]: PropTypes.Validator<any>} = {
        onSummary: PropTypes.func.isRequired
    };

export class CalculatorSummaryButton extends React.Component<CalculatorSummaryButtonProps> {
    public static readonly contextTypes = CalculatorContextTypes;
    public static readonly propTypes = CalculatorSummaryButtonPropTypes;

    public readonly context: CalculatorContext;

    public render(): JSX.Element {
        const { onSummary, children, ...childProps } = this.props;

        return (
            <button
                type="button"
                {...childProps}
                onClick={this.handleClick}
            >
                {children}
            </button>
        );
    }

    protected handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        this.props.onClick && this.props.onClick(event);

        this.props.onSummary({
            term: this.context.Credit.term,
            amount: this.context.Credit.amount
        });
    }
}
