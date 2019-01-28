import * as React from "react";

export interface CalculatorContextValue {
    amount: {
        min: number;
        max: number;
        value: number;
        step: number;
        onChange: (next: number) => number;
    },
    term: {
        min: number;
        max: number;
        value: number;
        step: number;
        onChange: (next: number) => number
    },
    interest: {
        rate: number,
        amount: number;
    };
}

export const CalculatorContextDefaultValue: CalculatorContextValue = {
    amount: {
        min: 250,
        max: 2000,
        value: 250,
        step: 50,
        onChange: (next) => next,
    },
    term: {
        min: 5,
        max: 30,
        value: 5,
        step: 1,
        onChange: (next) => next,
    },
    interest: {
        rate: 0.0175,
        amount: 0,
    },
};

export const CalculatorContext = React.createContext<CalculatorContextValue>(CalculatorContextDefaultValue);
