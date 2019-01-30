import * as React from "react";
import { CalculatorContext, CalculatorContextValue } from "./CalculatorContext";

export interface PromocodeInputProps extends React.HTMLProps<HTMLInputElement> {
    onRequestDiscount: (promocode: string) => Promise<number | undefined>;
}

export interface PromocodeInputState {
    value: string;
    isValid?: boolean;
}

export const PromocodeInputContext = React.createContext<boolean | undefined>(undefined);

export class PromocodeInput extends React.PureComponent<PromocodeInputProps, PromocodeInputState> {
    public static readonly contextType = CalculatorContext;

    public readonly context: CalculatorContextValue;
    public readonly state: PromocodeInputState = {
        value: this.context.promocode && this.context.promocode.value || ""
    };

    public async componentDidMount() {
        if (this.state.value) {
            await this.handleValidate();
        }
    }

    public render() {
        const { onRequestDiscount, children, ...childProps} = this.props;

        return (
            <>
                <input
                    {...childProps}
                    value={this.state.value}
                    onChange={this.handleChange}
                    onBlur={this.handleValidate}
                />
                {children && <PromocodeInputContext.Provider value={this.state.isValid} children={children} />}
            </>
        );
    }

    protected handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            value: e.currentTarget.value,
            isValid: undefined,
        });
        this.context.promocode.onChange();
    };

    protected handleValidate = async () => {
        if (!this.state.value) {
            this.setState({ isValid: undefined });
            return;
        }

        const discount = await this.props.onRequestDiscount(this.state.value);
        if (!discount) {
            this.setState({ isValid: false });
            return;
        }

        this.context.promocode.onChange({ value: this.state.value, discount });
        this.setState({ isValid: true });
    }
}
