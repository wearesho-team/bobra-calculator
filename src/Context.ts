import * as React from "react";

export interface ContextValue {
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

export const ContextDefaultValue: ContextValue = {
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

export const Context = React.createContext<ContextValue>(ContextDefaultValue);
