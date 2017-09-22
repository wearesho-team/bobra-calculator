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
        };
        Amount: {
            min: number;
            max: number;
            step: number;
        };
    };
    onAmountChange: (nextAmount: number) => void;
    onTermChange: (nextTerm: number) => void;
}
export declare const CalculatorContextTypes: {
    Credit: PropTypes.Validator<any>;
    Conditions: PropTypes.Requireable<any>;
    onAmountChange: PropTypes.Validator<any>;
    onTermChange: PropTypes.Validator<any>;
};
