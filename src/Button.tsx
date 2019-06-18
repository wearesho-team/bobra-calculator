import * as React from "react";
import { ControlContext, ControlContextValue } from "./ControlContext";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    increase: boolean,
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { increase, children, ...childProps } = props;

    const context = React.useContext(ControlContext);
    const isDisabled = increase
        ? context.value >= context.max
        : context.value <= context.max;
    const handleClick = React.useCallback(() => {
        if (isDisabled) {
            return;
        }

        const delta = increase ? 1 : -1;
        context.onChange(context.value + delta * context.step);
    }, [ isDisabled, increase, context.value, context.step ]);

    return (
        <button {...props} disabled={isDisabled} onClick={handleClick}>
            {children}
        </button>
    );
};
