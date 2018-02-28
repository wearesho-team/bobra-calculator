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

    onAmountChange: PropTypes.func,
    onTermChange: PropTypes.func,
};
