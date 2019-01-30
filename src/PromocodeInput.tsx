import * as React from "react";
import { CalculatorContext, CalculatorContextValue } from "./CalculatorContext";

export interface PromocodeInputProps extends React.HTMLProps<HTMLInputElement> {
    onRequestDiscount: (promocode: string) => Promise<number | undefined>;
}

export class PromocodeInput extends React.PureComponent<PromocodeInputProps, { value: string; }> {
    public static readonly contextType = CalculatorContext;

    public readonly context: CalculatorContextValue;
    public readonly state = {
        value: this.context.promocode && this.context.promocode.value || ""
    };

    public async componentDidMount() {
        if (this.state.value) {
            await this.validate();
        }
    }

    public render() {
        const { onRequestDiscount, ...childProps} = this.props;

        return (
            <input
                {...childProps}
                value={this.state.value}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
            />
        );
    }

    protected handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onChange && this.props.onChange(e);
        this.setState({ value: e.currentTarget.value });
    };

    protected handleBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
        this.props.onBlur && this.props.onBlur(e);
        await this.validate();
    }

    protected validate = async () => {
        if (!this.state.value) {
            this.context.onPromocodeChange();
            return;
        }

        const discount = await this.props.onRequestDiscount(this.state.value);
        this.context.onPromocodeChange(discount ? { value: this.state.value, discount } : undefined);
    }
}
