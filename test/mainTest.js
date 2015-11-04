describe('main', function() {

  module.sharedInjector();

  beforeAll(module("main", function($provide) {
    $provide.value("stubMe", {
      service: "stubbed",
    })
  }))

  var answer;
  var beforeAllRuns = 0;
  var beforeEachRuns = 0;

  beforeAll(inject(function(someService) {
    beforeAllRuns += 1;
    answer = someService.question();
  }))

  beforeEach(function() {
    beforeEachRuns += 1; 
  })

  it('it has successfully run beforeAll', function() {
    expect(answer).toBe(42) 
  })

  it('so I can make many specific assertions', function() {
    expect(isNaN(answer)).toBe(false) 
  })

  it('without re-running expensive setup', function() {
    expect(beforeAllRuns).toBe(1) 
  })

  it('allows me to stub', inject(function(stubMe) {
    expect(stubMe.service).toBe("stubbed") 
  }))

  it('allows me to use beforeEach too', function() {
    expect(beforeEachRuns).toBeGreaterThan(2);
  })
    
})
