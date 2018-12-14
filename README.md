## pupeteer automation on electron app
A minimal Electron application withe puppeteer automation testing.
Because of electron using chromium and puppeteer also using chromium
It would be quite simple  to setup automation withe puppeteer on electron app.

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
the browser object let you get the pages on your electron app like this  `browser.pages()`.

evry puupeteer page object is conecctend to one of your html page on yuor electron app and its let you automate actoins from yuor code like `page.click("qurey selector")`,  `page.type("qurey selector","some text")` etc.

for mofre informaion [puppeteer docs](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md "puppeteer docs")

## chromium varsion
electron 3 varsion use chromium 66 varsion so you need to use puppeteer 1.3 .
or you can use electron 4 which use chromium 69 and puppeteer 1.6.2^