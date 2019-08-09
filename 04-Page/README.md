# Class
* 继承: `EventEmitter`

Page 提供操作一个 tab 或者 extension background page 的方法.
一个 `Browser` 实例可以有多个 `Page` 实例

# Events
* page.on('close'): 当页面关闭时触发
* page.on('console'): 当页面 JavaScript 代码调用了 `console` 的某个方法
* page.on('dialog'): 当 JavaScript 对话框出现的时候触发
* page.on('domcontentload'): 当页面 `DOMContentLoaded` 事件被触发时触发
* page.on('error'): 当页面崩溃时触发
* page.on('frameattached'): 当 `iframe` 加载的时候触发
* page.on('framedetached'): 当 `iframe` 从页面移除的时候触发
* page.on('framenavigated'): 当 `iframe` 导航到新的 url 时触发
* page.on('load): 当页面的 `load` 事件被触发时触发
* page.on('metrics'): 当页面 JavaScript 代码调用了 `console.timeStamp` 方法时触发
* page.on('pageerror'): `<Error>` 异常信息
* page.on('request'): 当页面发送一个请求时触发
* page.on('requestfailed'): 当页面的请求失败时触发。比如某个请求超时了。
* page.on('requestfinished'): 当页面的某个请求成功完成时触发。
* page.on('response'): 当页面的某个请求接收到对应的 `response` 时触发
* page.on('workercreated'): 当页面生成相应的 `WebWorker` 时触发
* page.on('workerdestoryed'): 当页面终止相应的 `WebWorker` 时触发

# Methods
* page.$(selector): 此方法在页面内执行 document.querySelector, 如果没有匹配到指定选择器, 返回值是 `null`
* page.$$(selector): 此方法在页面内执行 document.querySelectorAll, 如果没有匹配到指定选择器, 返回值是 `[]`
* page.$$eval(selector, pageFunction[, ...args]): 此方法在页面内执行 Array.from(document.querySelectorAll(selector))然后把匹配到的元素数组作为第一个参数传给 pageFunction
* page.$eval(selector, pageFunction[, ...args]): 此方法在页面内执行 document.querySelector，然后把匹配到的元素作为第一个参数传给 pageFunction
* page.$x(expression): 此方法解析指定的XPath表达式
* page.addScriptTag(options): 注入一个指定 src(url) 或者代码(content)的 `script` 标签到当前页面
* page.addStyleTag(options): 添加一个指定 link(url) 的 <link rel="stylesheet"> 标签。 或者添加一个指定代码(content)的 <style type="text/css"> 标签
* page.authenticate(credentials): 为 HTTP authentication 提供认证凭据
* page.bringToFront(): 相当于多个tab时，切换到某个tab
* page.browser(): 得到当前 page 实例所属的 browser 实例
* page.click(selector[, options]): 此方法找到一个匹配 selector 选择器的元素，如果需要会把此元素滚动到可视，然后通过 `page.mouse` 点击它
* page.close([options]): page.close() 在 beforeunload 处理之前默认不执行
* page.content(): 返回页面的完整 html 代码，包括 doctype
* page.cookies([...urls])
* page.deleteCookie(...cookies)
* page.emulate(options)
* page.emulateMedia(mediaType)
* page.evaluate(pageFunction[, ...args])
* page.evaluateHandle(pageFunction[, ...args])
* page.evaluateOnNewDocument(pageFunction[, ...args])
* page.exposeFunction(name, puppeteerFunction)
* page.focus(selector)
* page.frames()
* page.goBack([options])
* page.goForward([options])
* page.goto(url[, options])
* page.hover(selector)
* page.isClosed()
* page.mainFrame()
* page.metrics()
* page.pdf([options])
* page.queryObjects(prototypeHandle)
* page.reload([options])
* page.screenshot([options])
* page.select(selector, ...values)
* page.setBypassCSP(enabled)
* page.setCacheEnabled([enabled])
* page.setContent(html[, options])
* page.setCookie(...cookies)
* page.setDefaultNavigationTimeout(timeout)
* page.setExtraHTTPHeaders(headers)
* page.setGeolocation(options)
* page.setJavaScriptEnabled(enabled)
* page.setOfflineMode(enabled)
* page.setRequestInterception(value)
* page.setUserAgent(userAgent)
* page.setViewport(viewport)
* page.tap(selector)
* page.target()
* page.title()
* page.type(selector, text[, options])
* page.url()
* page.viewport()
* page.waitFor(selectorOrFunctionOrTimeout[, options[, ...args]])
* page.waitForFunction(pageFunction[, options[, ...args]])
* page.waitForNavigation([options])
* page.waitForRequest(urlOrPredicate[, options])
* page.waitForResponse(urlOrPredicate[, options])
* page.waitForSelector(selector[, options])
* page.waitForXPath(xpath[, options])
* page.workers()
