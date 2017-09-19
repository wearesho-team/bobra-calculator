import * as PropTypes from "prop-types";

export interface CalculatorProps {
    interest: number,
    amount: {
        max: number,
        min: number,
        initial?: number,
        step?: number,
    },
    term?: {
        max: number,
        min: number,
        initial?: number,
        step?: number,
    },

    onAmountChange?: (nextAmount: number) => void,
    onTermChange?: (nextTerm: number) => void,

    children: JSX.Element,
}

export const CalculatorPropTypes = {
    interest: PropTypes.number.isRequired,
    amount: PropTypes.shape({
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        initial: PropTypes.number,
        step: PropTypes.number,
    }).isRequired,
    term: PropTypes.shape({
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        initial: PropTypes.number,
        step: PropTypes.number,
    }),

    onAmountChange: PropTypes.func.isRequired,
    onTermChange: PropTypes.func.isRequired,

    children: PropTypes.element.isRequired,
};
