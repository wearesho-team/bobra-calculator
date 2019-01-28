import * as React from "react";
import Slider, { SliderProps } from "rc-slider";

import { CalculatorControlContext } from "./CalculatorControlContext";

export const CalculatorSlider: React.FunctionComponent<SliderProps> = (props) => (
    <CalculatorControlContext.Consumer>
        {(value) => <Slider {...props} {...value} />}
    </CalculatorControlContext.Consumer>
);
