# Angular Jasmine with beforeAll

Demonstrates how ngMock could support jasmine/mocha's `beforeAll`/`before` behaviour.

## Changes to ngMock

You'll need to manually cleanup modules now. So pair `module()` calls with `module.cleanup` calls. e.g

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
