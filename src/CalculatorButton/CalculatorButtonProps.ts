import * as React from "react";
import * as PropTypes from "prop-types";

export interface CalculatorButtonProps extends React.HTMLProps<HTMLButtonElement> {
    increase: boolean,
}

export const CalculatorButtonPropTypes = {
    increase: PropTypes.bool.isRequired,
};
