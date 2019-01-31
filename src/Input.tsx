import * as React from "react";
import { ControlContext, ControlContextValue } from "./ControlContext";

export class Input extends React.PureComponent<React.HTMLProps<HTMLInputElement>> {
    public static readonly contextType = ControlContext;
    public readonly context: ControlContextValue;
    protected input = React.createRef<HTMLInputElement>();

    public componentDidUpdate() {
        if (!this.input.current) {
            return;
        }
        this.input.current.value = this.context.value.toString();
    }

    public render(): JSX.Element {
        return (
            <input
                {...this.props}
                ref={this.input}
                defaultValue={this.context.value.toString()}
                onInput={this.handleInput} onBlur={this.handleBlur}
            />
        )
    }

    protected handleBlur = (event: React.FormEvent<HTMLInputElement>) => {
        this.context.onChange(Number(event.currentTarget.value));
    };

    protected handleInput = (event: React.FormEvent<HTMLInputElement>) => {
        if (event.currentTarget.value.match(/\D/)) {
            event.preventDefault();
            return;
        }
    };
}
