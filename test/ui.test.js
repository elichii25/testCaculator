var {driver, base_url} = require('../index.js');
var expect = require('chai').expect;
var MainPage = require('../src/pageobject/mainPage');

describe('UI Validation Test Suite' , async ()=>{

    let mainPage;
    const numbersList = ['1','2','3','4','5','6','7','8','9','0','.'];
    const signsList = ['+','-','x','÷','=','+/-','%'];
    
    before(async () => {
        mainPage = new MainPage(driver);
        await mainPage.visit(base_url);
        await driver.get(base_url);
    });

    after(async ()=>{
        driver.close();
    });

    it('Validate UI has all important web elements ', async ()=>{
        //Validate UI elements exist - button
        for (let btn of numbersList) {
            expect(await mainPage.isElementExist(await mainPage.getButtonElelement(btn))).to.be.true;
        }

        //Validate UI elements exist - Signs
        for (let sign of signsList) {
            expect(await mainPage.isElementExist(await mainPage.getButtonElelement(sign))).to.be.true;
        }

        //Validate Display element exist
        expect(await mainPage.isElementExist(await mainPage.displayTxt)).to.be.true; 
        expect(await mainPage.getText(mainPage.displayTxt)).equal('0') //The default value should be "0"
    });

});