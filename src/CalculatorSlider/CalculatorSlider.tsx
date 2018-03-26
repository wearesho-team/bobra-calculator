import * as React from "react";
import * as PropTypes from "prop-types";
import {
    CalculatorControlWrapperContextTypes,
    CalculatorControlWrapperContext,
} from "../CalculatorControlWrapper/CalculatorControlWrapperContext";

import Slider, { SliderProps } from "rc-slider";

export class CalculatorSlider extends React.Component<SliderProps> {
    public static readonly contextTypes = CalculatorControlWrapperContextTypes;

    public context: CalculatorControlWrapperContext;

    public render(): JSX.Element {
        return (
            <Slider
                {...this.props}
                value={this.context.calculationValue}
                min={this.context.Conditions.min}
                max={this.context.Conditions.max}
                step={this.context.Conditions.step}
                onChange={this.context.onCalculationChange}
            />
        );
    }
}
