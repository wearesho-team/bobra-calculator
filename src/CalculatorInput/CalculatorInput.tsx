import * as React from "react";
import * as PropTypes from "prop-types";
import {
    CalculatorControlWrapperContext,
    CalculatorControlWrapperContextTypes
} from "../CalculatorControlWrapper/CalculatorControlWrapperContext";

export class CalculatorInput extends React.Component<React.HTMLProps<HTMLInputElement>, undefined> {
    public static readonly contextTypes = CalculatorControlWrapperContextTypes;

    public readonly context: CalculatorControlWrapperContext;
    protected input: HTMLInputElement;

    public render(): JSX.Element {
        return (
            <input
                {...this.props.children}
                ref={this.inputRef}
                onInput={this.handleInput} onBlur={this.handleBlur}
            />
        )
    }

    protected handleBlur = (event: React.FormEvent<HTMLInputElement>) => {
        const nextValue: number = Number(event.currentTarget.value);
        if (nextValue > this.context.Conditions.max || nextValue < this.context.Conditions.min) {
            event.currentTarget.value = this.context.calculationValue.toString();
            return;
        }

        if (nextValue === this.context.Conditions.max) {
            this.context.onCalculationChange(nextValue);
        }

        this.context.onCalculationChange(nextValue - ((nextValue - this.context.Conditions.min) % 25));
    };

    protected handleInput = (event: React.FormEvent<HTMLInputElement>) => {
        if (event.currentTarget.value.match(/\D/)) {
            event.preventDefault();
            return;
        }
    };

    protected inputRef = (input: HTMLInputElement) => this.input = input;
}
