import * as React from "react";
import { mount } from "enzyme";

import * as Calculator from "../src";

describe("<Calculator.Label />", () => {
    const value: Calculator.ContextValue = {
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
            <Calculator.Context.Provider value={value}>
                <Calculator.Label labelType={Calculator.LabelType.term}/>
            </Calculator.Context.Provider>
        );
        expect(wrapper.html()).toEqual(`<span aria-label="term">${value.term.value}</span>`);
    });

    it("have to render amount value", () => {
        const wrapper = mount(
            <Calculator.Context.Provider value={value}>
                <Calculator.Label labelType={Calculator.LabelType.amount}/>
            </Calculator.Context.Provider>
        );
        expect(wrapper.html()).toEqual(`<span aria-label="amount">${value.amount.value}</span>`);
    });

    it("have to render interest value", () => {
        const wrapper = mount(
            <Calculator.Context.Provider value={value}>
                <Calculator.Label labelType={Calculator.LabelType.interest}/>
            </Calculator.Context.Provider>
        );
        expect(wrapper.html()).toEqual(`<span aria-label="interest">${value.interest.amount}</span>`);
    });

    it("have to render total amount value", () => {
        const wrapper = mount(
            <Calculator.Context.Provider value={value}>
                <Calculator.Label labelType={Calculator.LabelType.total}/>
            </Calculator.Context.Provider>
        );
        expect(wrapper.html()).toEqual(
            `<span aria-label="total">${value.amount.value + value.interest.amount}</span>`
        );
    });

    it("have to render min amount value", () => {
        const wrapper = mount(
            <Calculator.Context.Provider value={value}>
                <Calculator.Label labelType={Calculator.LabelType.minAmount}/>
            </Calculator.Context.Provider>
        );
        expect(wrapper.html()).toEqual(
            `<span aria-label="minAmount">${value.amount.min}</span>`
        );
    });

    it("have to render max amount value", () => {
        const wrapper = mount(
            <Calculator.Context.Provider value={value}>
                <Calculator.Label labelType={Calculator.LabelType.maxAmount}/>
            </Calculator.Context.Provider>
        );
        expect(wrapper.html()).toEqual(
            `<span aria-label="maxAmount">${value.amount.max}</span>`
        );
    });

    it("have to render min term value", () => {
        const wrapper = mount(
            <Calculator.Context.Provider value={value}>
                <Calculator.Label labelType={Calculator.LabelType.minTerm}/>
            </Calculator.Context.Provider>
        );
        expect(wrapper.html()).toEqual(
            `<span aria-label="minTerm">${value.term.min}</span>`
        );
    });

    it("have to render max term value", () => {
        const wrapper = mount(
            <Calculator.Context.Provider value={value}>
                <Calculator.Label labelType={Calculator.LabelType.maxTerm}/>
            </Calculator.Context.Provider>
        );
        expect(wrapper.html()).toEqual(
            `<span aria-label="maxTerm">${value.term.max}</span>`
        );
    });
});
