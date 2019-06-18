import * as React from "react";
import { ControlContext, ControlContextValue } from "./ControlContext";

export const Input: React.FC<React.HTMLProps<HTMLInputElement>> = (props) => {
    const context = React.useContext(ControlContext);
    const input = React.useRef<HTMLInputElement>(undefined);
    const handleBlur = React.useCallback((event: React.FormEvent<HTMLInputElement>) => {
        context.onChange(Number(event.currentTarget.value));
    }, [ context.onChange ]);
    const handleInput = React.useCallback((event: React.FormEvent<HTMLInputElement>) => {
        if (event.currentTarget.value.match(/\D/)) {
            event.preventDefault();
            return;
        }
    }, []);
    React.useEffect(() => {
        if (!input.current) {
            return;
        }
        input.current.value = context.value.toString();
    }, [ context.value ]);

    return (
        <input
            {...props}
            ref={input}
            defaultValue={context.value.toString()}
            onInput={handleInput} onBlur={handleBlur}
        />
    );
};
