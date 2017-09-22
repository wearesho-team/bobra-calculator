import * as PropTypes from "prop-types";
export interface CalculatorContext {
    Credit: {
        amount: number;
        term: number;
        interest: number;
    };
    Conditions: {
        Term: {
            min: number;
            max: number;
            step: number;
            initial: number;
        };
        Amount: {
            min: number;
            max: number;
            step: number;
            initial: number;
        };
    };
    onAmountChange: (nextAmount: number) => number;
    onTermChange: (nextTerm: number) => number;
}
export declare const CalculatorContextTypes: {
    Credit: PropTypes.Validator<any>;
    Conditions: PropTypes.Requireable<any>;
    onAmountChange: PropTypes.Validator<any>;
    onTermChange: PropTypes.Validator<any>;
};
