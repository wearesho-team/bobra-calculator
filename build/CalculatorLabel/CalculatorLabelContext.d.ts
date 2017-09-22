import * as PropTypes from "prop-types";
export interface CalculatorLabelContext {
    Credit: {
        amount: number;
        term: number;
        interest: number;
    };
}
export declare const CalculatorLabelContextTypes: {
    Credit: PropTypes.Validator<any>;
};
