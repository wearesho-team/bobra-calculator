import * as PropTypes from "prop-types";
export interface CalculatorControlWrapperContext {
    Conditions: {
        min: number;
        max: number;
        step: number;
        initial: number;
    };
    calculationValue: number;
    onCalculationChange: (delta: number) => number;
}
export declare const CalculatorControlWrapperContextTypes: {
    Conditions: PropTypes.Validator<any>;
    calculationValue: PropTypes.Validator<any>;
    onCalculationChange: PropTypes.Validator<any>;
};
