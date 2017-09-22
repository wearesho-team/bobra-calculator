import * as React from "react";
import * as PropTypes from "prop-types";

import {
    CalculatorControlWrapperProps,
    CalculatorControlWrapperPropTypes,
    CalculatorControlTypes
} from "./CalculatorControlWrapperProps";
import {CalculatorControlWrapperContext, CalculatorControlWrapperContextTypes} from "./CalculatorControlWrapperContext";
import {CalculatorContext, CalculatorContextTypes} from "../Calculator/CalculatorContext";

export class CalculatorControlWrapper extends React.Component<CalculatorControlWrapperProps> {
    public static readonly propTypes = CalculatorControlWrapperPropTypes;
    public static readonly contextTypes = CalculatorContextTypes;
    public static readonly childContextTypes = CalculatorControlWrapperContextTypes;

    public readonly context: CalculatorContext;

    public getChildContext(): CalculatorControlWrapperContext {
        return {
            calculationValue: this.context.Credit[this.props.type.toLowerCase()],
            onCalculationChange: this.handleCalculationChange,
            Conditions: {
                ...this.context.Conditions[this.props.type],
            },
        };
    }

    public render(): JSX.Element {
        return this.props.children;
    }

    protected get handleCalculationChange() {
        switch (this.props.type) {
            case CalculatorControlTypes.amount:
                return this.context.onAmountChange;
            case CalculatorControlTypes.term:
                return this.context.onTermChange;
            default:
                return () => undefined;
        }
    }
}
