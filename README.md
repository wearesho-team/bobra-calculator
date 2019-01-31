# React Credit Calculator

[![Build Status](https://travis-ci.org/wearesho-team/react-credit-calculator.svg?branch=master)](https://travis-ci.org/wearesho-team/react-credit-calculator)

## Features
- Implementing simple credit calculators using React Context
- Written on Typescript
- Using 

## Installation
Using [npm](https://npmjs.com/)
```bash
npm i react-credit-calculator@^2.0
```

## Usage

```typescript jsx
import * as React from "react";
import * as Calculator from "./src";

const conditions: Calculator.ControllerProps = {
    interestRate: 0.0175, // 1.75% per day
    amount: {
        min: 500,
        max: 2000,
        initial: 1000,
        step: 50,
    },
    rate: {
        min: 1,
        max: 30,
        initial: 7,
        step: 1,
    },
};

return (
    <Calculator.Controller {...conditions}>
    
        {/** Controls for amount */}
        <Calculator.ControlWrapper type="amount">
            <Calculator.Button>
                Decrease
            </Calculator.Button>
            <Calculator.Input />
            <Calculator.Button increase>
                Increase
            </Calculator.Button>
        </Calculator.ControlWrapper>
        
        
        {/** Controls for term */}
        <Calculator.ControlWrapper type="term">
            <Calculator.Button>
                Decrease
            </Calculator.Button>
            <Calculator.Input />
            <Calculator.Button increase>
                Increase
            </Calculator.Button>
        </Calculator.ControlWrapper>
        
        {/** Summary */}
        <Calculator.Label type={"term"} />
        <Calculator.Label type={"total"} />
        <Calculator.DateLabel />
    </Calculator.Controller>
);
```

Using context manually:
```typescript jsx
import * as React from "react";
import * as Calculator from "./src";

return (
    <Calculator.Controller>{/** Include props */}
        <Calculator.Context.Consumer>
            {(value) => console.log(value) /** do something */}
        </Calculator.Context.Consumer>
    </Calculator.Controller>
);
```
see [ContextValue](./src/Context.ts) for details.

## Suggests
- [react-credit-calculator-slider](https://github.com/wearesho-team/react-credit-calculator-slider) - rc-slider integration

## Contributors
- [Alexander <horat1us> Letnikow](mailto:reclamme@gmail.com)

## License
[MIT](./LICENSE)
