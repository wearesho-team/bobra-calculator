import * as React from "react";
import { CalculatorContext } from "./CalculatorContext";
import { CalculatorControlContext } from "./CalculatorControlContext";

export enum CalculatorControlTypes {
    term = "term",
    amount = "amount",
}

export interface CalculatorControlWrapperProps {
    type: CalculatorControlTypes,
}

export const CalculatorControlWrapper: React.FunctionComponent<CalculatorControlWrapperProps> = (props) => (
    <CalculatorContext.Consumer>
        {(value) => <CalculatorControlContext.Provider children={props.children} value={value[ props.type ]}/>}
    </CalculatorContext.Consumer>
);
