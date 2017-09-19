import * as PropTypes from "prop-types";

export enum CalculatorControlTypes {
    term = "Term",
    amount = "Amount",
}

export interface CalculatorControlWrapperProps {
    type: CalculatorControlTypes,
    children: JSX.Element,
}

export const CalculatorControlWrapperPropTypes = {
    type: PropTypes.oneOf(Object.keys(CalculatorControlTypes)).isRequired,
    children: PropTypes.element.isRequired,
};
