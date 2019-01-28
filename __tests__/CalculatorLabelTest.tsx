import * as React from "react";
import { mount } from "enzyme";

import { CalculatorContext, CalculatorContextValue, CalculatorLabel, CalculatorLabelType } from "../src";

describe("<CalculatorLabel />", () => {
    const value: CalculatorContextValue = {
        amount: {
            min: 250,
            max: 2000,
            value: 1000,
            step: 50,
            onChange: (next) => next,
        },
        term: {
            min: 5,
            max: 30,
            value: 10,
            step: 1,
            onChange: (next) => next,
        },
        interest: {
            rate: 0.0175,
            amount: 100,
        },
    };

    it("have to render term value", () => {
        const wrapper = mount(
            <CalculatorContext.Provider value={value}>
                <CalculatorLabel labelType={CalculatorLabelType.term}/>
            </CalculatorContext.Provider>
        );
        expect(wrapper.html()).toEqual(`<span aria-label="term">${value.term.value}</span>`);
    });

    it("have to render amount value", () => {
        const wrapper = mount(
            <CalculatorContext.Provider value={value}>
                <CalculatorLabel labelType={CalculatorLabelType.amount}/>
            </CalculatorContext.Provider>
        );
        expect(wrapper.html()).toEqual(`<span aria-label="amount">${value.amount.value}</span>`);
    });

    it("have to render interest value", () => {
        const wrapper = mount(
            <CalculatorContext.Provider value={value}>
                <CalculatorLabel labelType={CalculatorLabelType.interest}/>
            </CalculatorContext.Provider>
        );
        expect(wrapper.html()).toEqual(`<span aria-label="interest">${value.interest.amount}</span>`);
    });

    it("have to render total amount value", () => {
        const wrapper = mount(
            <CalculatorContext.Provider value={value}>
                <CalculatorLabel labelType={CalculatorLabelType.total}/>
            </CalculatorContext.Provider>
        );
        expect(wrapper.html()).toEqual(
            `<span aria-label="total">${value.amount.value + value.interest.amount}</span>`
        );
    });
});
