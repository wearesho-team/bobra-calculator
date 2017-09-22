import * as PropTypes from "prop-types";
export interface CalculatorControlWrapperContext {
    Conditions: {
        min: number;
        max: number;
        step: number;
    };
    calculationValue: number;
    onCalculationChange: (nextValue: number) => void;
}
export declare const CalculatorControlWrapperContextTypes: {
    Conditions: PropTypes.Validator<any>;
    calculationValue: PropTypes.Validator<any>;
    onCalculationChange: PropTypes.Validator<any>;
};
