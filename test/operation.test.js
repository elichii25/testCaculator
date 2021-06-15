var {driver, base_url} = require('../index.js');
var expect = require('chai').expect;
var MainPage = require('../src/pageobject/mainPage');

describe('Arthimetic Operation Test Suite' , async ()=>{

    let mainPage;

    before(async () => {
        mainPage = new MainPage(driver);
        await mainPage.visit(base_url);
        await driver.get(base_url);
    });

    after(async ()=>{
        driver.close();
    });

    afterEach(async ()=>{
        //Clearing calculator result after each test execution
        await mainPage.clearResult();
    });

    it('Test calculator app Addition operation [1+3]', async ()=>{
        //Perform Addition (1+3)
        let answer = await mainPage.performAritmeticOpr('1', '3', '+');
        //Validate result
        expect(answer).equal('4');
    });

    it('Test calculator app Subtraction operation [4-9]', async ()=>{
        //Perform Subtraction (4-9)
        let answer = await mainPage.performAritmeticOpr('4', '9', '-');
        //Validate result
        expect(answer).equal('-5');
    });

    it('Test calculator app Multiplication operation [3 x 1]', async ()=>{
        //Perform Subtraction (3 x 1)
        let answer = await mainPage.performAritmeticOpr('3', '1', 'x');
        //Validate result
        expect(answer).equal('3');
    });

    it('Test calculator app Division operation [10÷2]', async ()=>{
        //Perform Division (3 x 1)
        let answer = await mainPage.performAritmeticOpr('10', '2', '÷');
        //Validate result
        expect(answer).equal('5');
    });
});