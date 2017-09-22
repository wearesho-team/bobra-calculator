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

    public componentDidUpdate() {
        this.input.value = this.context.calculationValue.toString();
    }

    public render(): JSX.Element {
        return (
            <input
                {...this.props}
                ref={this.inputRef}
                defaultValue={this.context.Conditions.initial.toString()}
                onInput={this.handleInput} onBlur={this.handleBlur}
            />
        )
    }

    protected handleBlur = (event: React.FormEvent<HTMLInputElement>) => {
        let nextValue: number = Number(event.currentTarget.value);
        nextValue = this.context.onCalculationChange(nextValue - ((nextValue - this.context.Conditions.min) % 25));
        event.currentTarget.value = nextValue.toString();
    };

    protected handleInput = (event: React.FormEvent<HTMLInputElement>) => {
        if (event.currentTarget.value.match(/\D/)) {
            event.preventDefault();
            return;
        }
    };

    protected inputRef = (input: HTMLInputElement) => this.input = input;
}
