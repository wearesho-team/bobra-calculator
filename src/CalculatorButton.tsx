import * as React from "react";
import { CalculatorControlContext, CalculatorControlContextValue } from "./CalculatorControlContext";

export interface CalculatorButtonProps extends React.HTMLProps<HTMLButtonElement> {
    increase: boolean,
}

export class CalculatorButton extends React.PureComponent<CalculatorButtonProps> {
    public static readonly contextType = CalculatorControlContext;
    public readonly context: CalculatorControlContextValue;

    public get isDisabled(): boolean {
        return this.props.increase
            ? this.context.value >= this.context.max
            : this.context.value <= this.context.max;
    }

    public render(): JSX.Element {
        const { increase, ...props } = this.props;
        return (
            <button {...props} disabled={this.isDisabled} onClick={this.handleClick}>
                {this.props.children}
            </button>
        );
    }

    protected handleClick = () => {
        if (this.isDisabled) {
            return;
        }
        const delta = this.props.increase ? 1 : -1;

        this.context.onChange(this.context.value + delta * this.context.step);
    }
}
