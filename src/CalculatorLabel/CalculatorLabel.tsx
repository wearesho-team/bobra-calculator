import * as React from "react";
import * as PropTypes from "prop-types";
import {CalculatorLabelProps, CalculatorLabelPropTypes, CalculatorLabelTypes} from "./CalculatorLabelProps";
import {CalculatorLabelContext, CalculatorLabelContextTypes} from "./CalculatorLabelContext";

export class CalculatorLabel extends React.Component<CalculatorLabelProps> {
    public static readonly propTypes = CalculatorLabelPropTypes;
    public static readonly contextTypes = CalculatorLabelContextTypes;

    public readonly context: CalculatorLabelContext;

    public render(): JSX.Element {
        const {labelType, ...childContext} = this.props;
        return <span {...childContext}>{this.children}</span>;
    }

    protected get children(): number {
        switch (this.props.labelType) {
            case CalculatorLabelTypes.amount:
                return this.context.Credit.amount;
            case CalculatorLabelTypes.interest:
                return this.context.Credit.interest;
            case CalculatorLabelTypes.term:
                return this.context.Credit.term;
            case CalculatorLabelTypes.total:
                return Math.round(this.context.Credit.amount + this.context.Credit.interest);
            default:
                return 0;
        }
    }
}
