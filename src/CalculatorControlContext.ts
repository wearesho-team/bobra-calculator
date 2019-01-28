import * as React from "react";

export interface CalculatorControlContextValue {
    min: number,
    max: number,
    step: number,
    value: number,
    onChange: (next: number) => number,
}

export const CalculatorControlContext = React.createContext<CalculatorControlContextValue>({
    min: 0,
    max: 0,
    step: 1,
    value: 0,
    onChange: (next) => next,
});
