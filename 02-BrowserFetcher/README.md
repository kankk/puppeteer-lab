# Class

BrowserFetcher 可以用来下载和管理不同版本的 Chromium.

BrowserFetcher 操作一个修订版版本字符串, 修订版本字符串指定了一个 Chromium 的确定版本.

```JavaScript
const browserFetcher = puppeteer.createBrowserFetcher();
const revisionInfo = await browserFetcher.download('533271');
const browser = await puppeteer.launch({executablePath: revisionInfo.executablePath})
```

Note: BrowserFetcher 不适用于共享下载目录的其他实例同时运行.

# Methods

## browserFetcher.canDownload(revision)

该方法将会发起一个 HEAD 请求来检查该修订版本是否有效.

## browserFetcher.download(revision[, progressCallback])

该方法将会发起一个 GET 请求来从主机下载该修订版本.

## browserFetcher.localRevisions()

该方法得到一个列表, 包含所有的在本地磁盘可用的修订版本.

## browserFetcher.platform()

该方法获取平台型号

## browserFetcher.remove(revision)

该方法可以移除指定的修订版本, 如果指定的修订版本还没有下载, 该方法将抛出一个错误

## browserFetcher.revisionInfo(revision)

该方法获取指定的修订版本的信息