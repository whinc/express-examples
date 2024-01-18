import { AsyncLocalStorage } from "async_hooks";

const asyncLocalStorage = new AsyncLocalStorage();

async function doSomething1(name) {
  console.log(`${doSomething1.name}: ${name}`);
  await asyncLocalStorage.run(name, doSomething2);
}

async function doSomething2() {
  console.log(`${doSomething2.name}: ${asyncLocalStorage.getStore()}`);
  setTimeout(doSomething3);
}

async function doSomething3() {
  console.log(`${doSomething3.name}: ${asyncLocalStorage.getStore()}`);
}

doSomething1("foo");
doSomething1("zoo");
