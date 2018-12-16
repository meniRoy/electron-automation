const assert = require('assert');
const electron = require("electron");
const puppeteer = require("puppeteer");

const launch = async () => await puppeteer.launch(
    {
        ignoreDefaultArgs: true,
        executablePath: electron,
        args: ["."]
    }
);

(async () => {
    const someText = 'new title';

    const browser = await launch();

    const page = (await browser.pages())[0];

    await page.type("#edit-title", someText);
    assert.equal(await page.title(), someText);

    browser.close();
})();