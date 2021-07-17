const puppeteer = require('puppeteer');

let browser,page;

beforeEach(async()=>{
     browser = await puppeteer.launch({
        headless:false
    });
     page = await browser.newPage();
    await page.goto('localhost:3000');
})

afterEach(async ()=>{
    await browser.close();
})

test('Header has the correct text',async()=>{
    const text= await page.$eval('a.brand-logo',el=>el.innerHTML);
    expect(text).toEqual('Blogster');    
})

test('Cliking login starts o-auth flow',async()=>{
    await page.click('.right a');
    const url = await page.url();
    expect(url).toMatch(/accounts\.google\.com/);
})


