import * as PropTypes from "prop-types";

export interface CalculatorControlWrapperContext {
    Conditions: {
        min: number,
        max: number,
        step: number,
        initial: number,
    },
    calculationValue: number,

    onCalculationChange: (delta: number) => number,
}

export const CalculatorControlWrapperContextTypes = {
    Conditions: PropTypes.shape({
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        step: PropTypes.number.isRequired,
    }).isRequired,
    calculationValue: PropTypes.number.isRequired,

    onCalculationChange: PropTypes.func.isRequired,
};
