import * as React from "react";
import { mount } from "enzyme";
import { spy } from "sinon";

import * as Calculator from "../src";

describe("<Range />", () => {
    it("have to match snapshot", () => {
        const wrapper = mount(
            <Calculator.ControlContext.Provider
                value={{ min: 500, max: 2000, step: 10, value: 1000, onChange: () => 1000 }}
            >
                <Calculator.Range />
            </Calculator.ControlContext.Provider>
        );
        expect(wrapper.html()).toMatchSnapshot();
    });

    it("have to trigger context onChange", () => {
        const handleChangeSpy = spy((n) => n);
        const wrapper = mount(
            <Calculator.ControlContext.Provider
                value={{ min: 500, max: 2000, step: 10, value: 1000, onChange: handleChangeSpy }}
            >
                <Calculator.Range />
            </Calculator.ControlContext.Provider>
        );
        wrapper.find("input").simulate("change", {
            target: {
                value: 1200,
            },
        });
        expect(handleChangeSpy.calledWith(1200)).toBeTruthy();
    });
});
