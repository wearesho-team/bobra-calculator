import * as React from "react";

import { expect } from "chai";
import { mount, ReactWrapper } from "enzyme";
import { CalculatorLabel, CalculatorLabelProps, CalculatorLabelTypes } from "../src";

describe("<CalculatorLabel />", () => {
    const context = {
        Credit: {
            amount: 500,
            term: 20,
            interest: 200,
        },
    };

    let wrapper: ReactWrapper<CalculatorLabelProps>;
    beforeEach(() => {
        wrapper = mount(<CalculatorLabel labelType={CalculatorLabelTypes.total} />, { context });
    });

    it("Should render children depends on labelType prop", () => {
        wrapper.setProps({
            labelType: CalculatorLabelTypes.total,
        });
        expect(wrapper.getDOMNode().innerHTML).to.equal("700");

        wrapper.setProps({
            labelType: CalculatorLabelTypes.interest,
        });
        expect(wrapper.getDOMNode().innerHTML).to.equal("200");

        wrapper.setProps({
            labelType: CalculatorLabelTypes.amount,
        });
        expect(wrapper.getDOMNode().innerHTML).to.equal("500");

        wrapper.setProps({
            labelType: CalculatorLabelTypes.term,
        });
        expect(wrapper.getDOMNode().innerHTML).to.equal("20");

        wrapper.setProps({
            labelType: CalculatorLabelTypes.termDeadline,
        });
        expect(wrapper.getDOMNode().innerHTML).to.equal("20");


        let formatted = false;
        const handleFormat = (date: Date) => {
            formatted = true;
            return "date";
        };
        wrapper.setProps({
            termDeadlineFormat: handleFormat
        });
        expect(formatted).to.be.true;
        expect(wrapper.getDOMNode().innerHTML).to.equal("date");
    })
});
