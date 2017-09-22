/// <reference types="react" />
import * as PropTypes from "prop-types";
export declare enum CalculatorControlTypes {
    term = "Term",
    amount = "Amount",
}
export interface CalculatorControlWrapperProps {
    type: CalculatorControlTypes;
    children: JSX.Element;
}
export declare const CalculatorControlWrapperPropTypes: {
    type: PropTypes.Validator<any>;
    children: PropTypes.Validator<any>;
};
