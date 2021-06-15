# Online Calculator Application Test (OCAT)

OCAT is a simple test automation framework developed using Node.js with Selenium webdriver, to execute a few automation test suites against this [online](https://ahfarmer.github.io/calculator/) calculator application.

## Installation


```bash
npm install
```

## Usage

```python
npm run op-test
```
To execute arithmetical operation test suite to satisfy the following scenarios
- Browse to the Calculator App
- Create a test for doing addition - Add 1 and 3
- Create a test for doing subtraction - Minus 4 from 9
- Create a test for doing multiplication - Multiply 3 by 1
- Create a test for doing division - Divide 10 by 2


```python
npm run ui-test
```
To execute UI test suite scenarios like validating if UI has
- all the necessary digit web elements
- all necessary arithmetic web elements
- a result display element with a correct default value etc.


## Finally

I tried to develop the framework with the most important software development principles like DRY(Don't Repeat Yourself), separation of concern, and code reusability and also used the page object model (POM) design pattern.

I made it simple & lightweight to satisfy the major requirements & few additional scenarios by incorporating explanatory comments as much as needed to clarify the intention.

Please feel free to contact me if you have any questions and/or suggestions.

© [elichii25]()