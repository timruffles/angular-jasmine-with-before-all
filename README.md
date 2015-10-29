# Angular Jasmine with beforeAll

Demonstrates how ngMock could support jasmine/mocha's `beforeAll`/`before` behaviour. This can make certain tests much faster. For instance, you can write 10 assertions about a piece of DOM that was expensive to generate.

## Changes to ngMock

Opt into manual injector control for `beforeAll` support. It's important to disable this after
your tests using manual injector have completed to avoid breaking tests that rely on automatic
injector control.

```javascript
beforeAll(module.enableManualInjector)
afterAll(module.disableManualInjector);
```

When using manual inject you need to manually cleanup modules. So pair `module()` calls with `module.cleanup` calls. e.g

```javascript
beforeEach(module("someModule"));
afterEach(module.cleanup);
```

or 

```javascript
beforeAll(module("someModule"));
afterAll(module.cleanup);
```

or whatever. Just pair them.

### module.cleanup()

Cleans up the injector configured by previous `module()` call.
