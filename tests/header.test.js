const puppeteer = require('puppeteer');

test('Add to number ',()=>{
    const sum = 1+3;
    expect(sum).toEqual(4)
})


test('We can launch a browser',async()=>{
    const browser = await puppeteer.launch({
        headless:false
    });
    const page = await browser.newPage();
    await page.goto('localhost:3000')
    
})