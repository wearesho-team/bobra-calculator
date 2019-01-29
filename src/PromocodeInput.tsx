import * as React from "react";
import { CalculatorContext, CalculatorContextValue } from "./CalculatorContext";

export interface PromocodeInputProps extends React.HTMLProps<HTMLInputElement> {
    onRequestDiscount: (promocode: string) => Promise<number | undefined>;
}

export class PromocodeInput extends React.Component<PromocodeInputProps> {
    public static readonly contextType = CalculatorContext;

    public readonly context: CalculatorContextValue;

    public async componentDidMount() {
        if (this.context.promocode.value) {
            await this.handleValidate();
        }
    }

    public render() {
        const { onRequestDiscount, ...childProps} = this.props;

        return (
            <input
                {...childProps}
                value={this.context.promocode.value}
                onChange={this.handleChange}
                onBlur={this.handleValidate}
            />
        );
    }

    protected handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.context.promocode.onChange(e.currentTarget.value);
    };

    protected handleValidate = async () => {
        if (!this.context.promocode.value) {
            this.context.promocode.onValidate();
            return;
        }

        const discount = await this.props.onRequestDiscount(this.context.promocode.value);
        this.context.promocode.onValidate(discount);
    }
}
