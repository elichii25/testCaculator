var {By, until} = require('selenium-webdriver');

class BasePage{

    constructor(thedriver){
        this.driver = thedriver;
    }

    async sendKeys(locator, keys){
        try {
            const element = this.driver.findElement(locator);
            await element.sendKeys(keys);
        } catch (error) {
            throw new Error(`Unable to send keys on${locator.toString()}`)
        }
    }

    async click(locator){
        try {
            const element = this.driver.findElement(locator);
            await element.click();
        } catch (error) {
            throw new Error(`Unable to click on ${locator.toString()}`)
        }
    }

    async getText(locator){
        try {
            const element = this.driver.findElement(locator);
            const text = element.getText();
            return text;
        } catch (error) {
            throw new Error(`Unable to get text from ${locator.toString()}`)
        }
    }

    async visit(url){
        await this.driver.get(url);
    }

    async sleepDriver(ms){
        await this.driver.sleep(ms);
    }

    async isElementExist(locator, retries = 3){
        try {
            await this.driver.findElement(locator);
            return true
        } catch (error) {
            if(retries === 0){
                return false;
            }
            this.driver.sleep(100);
            return this.isElementExist(locator, retries-1);
        }
    }
}

module.exports = BasePage;
