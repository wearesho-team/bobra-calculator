import * as React from "react";
import { Context } from "./Context";
import { ControlContext } from "./ControlContext";

export enum ControlTypes {
    term = "term",
    amount = "amount",
}

export interface ControlWrapperProps {
    type: ControlTypes,
}

export const ControlWrapper: React.FunctionComponent<ControlWrapperProps> = (props) => (
    <Context.Consumer>
        {(value) => <ControlContext.Provider children={props.children} value={value[ props.type ]}/>}
    </Context.Consumer>
);
