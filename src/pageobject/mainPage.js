var {By} = require('selenium-webdriver');
var BasePage = require('../helpers/base');

class MainPage extends BasePage{
   
    constructor(driver){
        super(driver);
        this.driver = driver;
        this.calculatorKeysBtn = '//*[contains(@class, "component-button")]/*[text()="keyValue"]';
        this.displayTxt = By.className("component-display")
    }

    getButtonElelement(val){
        let elementText;
        elementText = this.calculatorKeysBtn.replace('keyValue',val);
        return By.xpath(elementText);
    }

    async performAritmeticOpr(firstValue, secondValue, sign){
        await this.pressDigitKeys(firstValue); //a
        await this.click(await this.getButtonElelement(sign)); //+,-,x,÷
        await this.pressDigitKeys(secondValue); ; //b
        await this.click(await this.getButtonElelement('=')); //=
        return await this.getText(this.displayTxt); //Return the result value
    }

    async pressDigitKeys(value){
        for (let letter of value) {
            let elementText = this.getButtonElelement(letter);
            await this.click(elementText);
            this.sleepDriver(100);
        }
    }

    async clearResult(){
        await this.click(await this.getButtonElelement("AC")); //Click on "AC" button
    }

}

module.exports = MainPage;

