import * as PropTypes from "prop-types";

export interface CalculatorLabelContext {
    Credit: {
        amount: number,
        term: number,
        interest: number,
    },
}

export const CalculatorLabelContextTypes = {
    Credit: PropTypes.shape({
        amount: PropTypes.number.isRequired,
        term: PropTypes.number.isRequired,
        interest: PropTypes.number.isRequired,
    }).isRequired,
};
