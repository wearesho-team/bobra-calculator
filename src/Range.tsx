import * as React from "react";
import { ControlContext } from "./ControlContext";

export const Range: React.FC<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> =
    (props) => {
        const context = React.useContext(ControlContext);
        const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
            context.onChange(Number(e.target.value));
        }, [context.onChange]);

        return (
            <input
                {...props}
                type="range"
                min={context.min}
                max={context.max}
                step={context.step}
                value={context.value}
                onChange={handleChange}
            />
        );
    };
