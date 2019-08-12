https://pptr.dev/#?product=Puppeteer&version=v1.19.0&show=api-class-puppeteer

# Class

# Methods

## puppeteer.connect(options)

此方法将 Puppeteer 添加到已有的 Chromium 实例

## puppeteer.createBrowerFetcher([options])

* return<BrowserFetcher>

## puppeteer.defaultArgs([options])

Chromium 启动时使用的默认参数.

## puppeteer.executablePath()

* return<string>: Puppeteer 希望找到绑定的 Chromium 的路径. 如果使用 `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD` 跳过下载, 则 Chromium 可能不存在.

## puppeteer.launch([options])

这个方法结合了下面3个步骤:
* 使用 `puppeteer.defaultArgs()` 作为一组默认值来启动 Chromium.
* 启动浏览器并根据 `executablePath`, `handleSIGINT`, `dumpio` 和其他选项开始管理它的进程.
* 创建一个 `Browser` 类的实例, 并根据 `defaultViewport`, `slowMo` 和 `ignoreHTTPSErrors` 初始化它.