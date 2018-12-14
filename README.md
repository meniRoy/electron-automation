## pupeteer automation on electron app
A minimal Electron application with Puppeteer automation testing.
Because of Electron using chromium and puppeteer also using chromium, It would be quite simple to setup automation with puppeteer on the electron app.

## luanch the app
 to luanch the app in dev env:
```javascript
const puppeteer = require("puppeteer");
const electron = require("electron");

(async () => {
    const browser = await puppeteer.launch({
        ignoreDefaultArgs: true,
        executablePath: electron,
        args: ["path\to\app\project"]
    });

})();
```
to luanch the app after pack:

```javascript
const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({
        ignoreDefaultArgs: true,
        executablePath: "path\to\electron\binary"
    });
})();
```
## get page
the browser object lets you get the pages on your electron app like this  `browser.pages()`.

every puppeteer page object is connected to one of your html pages on your electron app and it lets you automate actions from your code like `page.click("qurey selector")`,  `page.type("qurey selector","some text")` etc.

for more information on [puppeteer docs](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md "puppeteer docs")

## chromium version
electron version 3 uses chromium version 66  so you need to use puppeteer 1.3 .
or you can use electron 4 which uses chromium version 69 and puppeteer 1.6.2^