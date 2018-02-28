import * as React from "react";
import * as PropTypes from "prop-types";
import {
    CalculatorControlWrapperContext,
    CalculatorControlWrapperContextTypes
} from "../CalculatorControlWrapper/CalculatorControlWrapperContext";
import {CalculatorButtonProps, CalculatorButtonPropTypes} from "./CalculatorButtonProps";

export class CalculatorButton extends React.Component<CalculatorButtonProps, undefined> {
    public static readonly contextTypes = CalculatorControlWrapperContextTypes;
    public static readonly propTypes = CalculatorButtonPropTypes;

    public readonly context: CalculatorControlWrapperContext;

    public get isDisabled(): boolean {
        return this.props.increase
            ? this.context.calculationValue >= this.context.Conditions.max
            : this.context.calculationValue <= this.context.Conditions.min;
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

        this.context.onCalculationChange(this.context.calculationValue + delta * this.context.Conditions.step);
    }
}
