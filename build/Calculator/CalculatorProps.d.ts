/// <reference types="react" />
import * as PropTypes from "prop-types";
export interface CalculatorProps {
    interest: number;
    amount: {
        max: number;
        min: number;
        initial?: number;
        step?: number;
    };
    term?: {
        max: number;
        min: number;
        initial?: number;
        step?: number;
    };
    onAmountChange?: (nextAmount: number) => void;
    onTermChange?: (nextTerm: number) => void;
    children: JSX.Element;
}
export declare const CalculatorPropTypes: {
    interest: PropTypes.Validator<any>;
    amount: PropTypes.Validator<any>;
    term: PropTypes.Requireable<any>;
    onAmountChange: PropTypes.Validator<any>;
    onTermChange: PropTypes.Validator<any>;
    children: PropTypes.Validator<any>;
};
