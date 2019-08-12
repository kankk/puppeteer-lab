# Class

当 Puppeteer 连接到一个 Chromium 实例的时候会通过 puppeteer.launch 或者 puppeteer.connext 创建一个 Browser 对象.

下面是使用 `Browser` 创建 `Page` 的例子

```JavaScript
const puppeteer = require('puppeteer');

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://www.qq.com');
  await browser.close();
});
```

一个断开连接和重连到 Browser 的例子

```JavaScript
const puppeteer = require('puppeteer');

puppeteer.launch().then(async browser => {
  // 存储节点以便能重新连接到 Chromium
  const browserWSEndpoint = browser.wsEndpoint();
  // 从 Chromium 断开和 puppeteer 的连接
  browser.disconnect();

  // 使用节点来重新建立连接
  const browser2 = await puppeteer.connect({browserWSEndpoint});
  // 关闭 Chromium
  await browser2.close();
});
```

# Events

* browser.on('disconnected'): 当 Puppeteer 从 Chromium 实例断开连接时被触发.
* browser.on('targetchanged'): 当目标的 URL 改变时被触发,
* browser.on('targetcreated'): 当目标被创建时被触发.
* browser.on('targetdestroyed'): 当目标被销毁时被触发.

# Methods

* browser.browserContexts(): 返回一个包含所有打开的浏览器上下文的数组. 在新创建的浏览器中, 这将返回 BrowserContext 的单一实例.
* browser.close(): 关闭 Chromium 及其所有页面, Browser 对象本身被认为是处理过的并不能再被使用.
* browser.createIncognitoBrowserContext(): 创建一个匿名的浏览器上下文. 这将不会与其他浏览器上下文分享 cookie/cache.
* browser.defaultBrowserContext(): 返回一个默认的浏览器上下文, 这个上下文不能被关闭.
* browser.disconnect(): 断开 Puppeteer 和浏览器的连接, 但 Chromium 进程仍然在运行.
* browser.newPage(): 返回一个新的 Page 对象. Page 在一个默认的浏览器上下文中被创建.
* browser.pages(): 返回一个浏览器中所有页面的数组. 在多个浏览器上下文的情况下, 该方法将返回一个包含所有浏览器上下文中所有页面的数组.
* browser.process(): 返回产生浏览器的进程.
* browser.target(): 返回浏览器相关的目标对象.
* browser.targets(): 返回浏览器内所有活动目标组成的数组.
* browser.userAgent(): 返回浏览器原始的 user-agent.
* browser.version(): 返回浏览器的版本.
* browser.wsEndpoint(): 返回浏览器 websocket 的地址.
