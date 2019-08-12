# Class

Worker 类表示一个 WebWorker. 在页面对象上 workercreated 和 workerdestoryed 事件被触发, 以标识 worker 的生命周期.

```JavaScript
page.on('workercreated', worker => console.log('Worker created: ' + worker.url()));
page.on('workerdestroyed', worker => console.log('Worker destroyed: ' + worker.url()));

console.log('Current workers:');
for (const worker of page.workers()) {
  console.log('  ' + worker.url());
}
```

# Methods

## worker.evaluate(pageFunction, ...args)

如果传递给 worker.evaluate 的函数返回一个 Promise, 那么 worker.evaluate 将等待解析并返回它的值. 
如果传递给 worker.evaluate 的函数返回一个 非序列化的值，那么 worker.evaluate 解析为 undefined.

## worker.evaluateHandle(pageFunction, ...args)

worker.evaluate 和 worker.evaluateHandle 之间的唯一区别是 worker.evaluateHandle 返回页内对象（JSHandle）。
如果传递给 worker.evaluateHandle 的函数返回一个 Promise，那么 worker.evaluateHandle 将等待解析并返回它的值。

## worker.executionContext()

## worker.url()
