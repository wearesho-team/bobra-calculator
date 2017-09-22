import * as PropTypes from "prop-types";

export interface CalculatorContext {
    Credit: {
        amount: number,
        term: number,
        interest: number,
    },
    Conditions: {
        Term: {
            min: number,
            max: number,
            step: number,
            initial: number,
        },
        Amount: {
            min: number,
            max: number,
            step: number,
            initial: number,
        },
    },

    onAmountChange: (nextAmount: number) => number,
    onTermChange: (nextTerm: number) => number,
}

export const CalculatorContextTypes = {
    Credit: PropTypes.shape({
        amount: PropTypes.number.isRequired,
        term: PropTypes.number.isRequired,
        interest: PropTypes.number.isRequired,
    }).isRequired,

    Conditions: PropTypes.shape({
        Term: PropTypes.shape({
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired,
            initial: PropTypes.number.isRequired,
            step: PropTypes.number.isRequired,
        }).isRequired,
        Amount: PropTypes.shape({
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired,

            initial: PropTypes.number.isRequired,
            step: PropTypes.number.isRequired,
        }).isRequired,
    }),

    onAmountChange: PropTypes.func.isRequired,
    onTermChange: PropTypes.func.isRequired,
};
