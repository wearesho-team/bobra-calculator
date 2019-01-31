import * as React from "react";

export interface ControlContextValue {
    min: number,
    max: number,
    step: number,
    value: number,
    onChange: (next: number) => number,
}

export const ControlContext = React.createContext<ControlContextValue>({
    min: 0,
    max: 0,
    step: 1,
    value: 0,
    onChange: (next) => next,
});
