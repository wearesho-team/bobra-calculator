import * as React from "react";

import {expect} from "chai";
import {mount, ReactWrapper} from "enzyme";

import {Calculator, CalculatorProps} from "../src";

describe("<Calculator />", () => {
    let wrapper: ReactWrapper<CalculatorProps>;
    let node: Calculator;

    beforeEach(() => {
        wrapper = mount(
            <Calculator interest={0.0175} amount={{min: 100, max: 1000}} term={{min: 5, max: 25}}>
                <span>Calculator</span>
            </Calculator>
        );
        node = wrapper.getNode() as any;
    });

    it("should take average of min and max for initial value (amount, term)", () => {
        expect(node.term).to.equal(15);
        expect(node.amount).to.equal(550);
    });

});
