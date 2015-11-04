describe('mixing with sharedInjector', function() {

  describe('tests with sharedInjector', function() {
    module.sharedInjector();

    var answer;
    var beforeAllRuns = 0;
    var beforeEachRuns = 0;

    beforeAll(module("main", function($provide) {
      $provide.value("stubMe", {
        service: "stubbed",
      })
    }))

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

  describe('without shared injector', function() {

    beforeEach(module("main", function($provide) {
      $provide.value("stubMe", {
        service: "stubbed",
      })
    }))

    beforeEach(inject(function(someService) {
      someService.count = (someService.count || 0) + 1;
    }))

    it('is possible to access services', inject(function(someService) {
      expect(someService.question()).toBe(42);
    }))

    it('allows me to stub', inject(function(stubMe) {
      expect(stubMe.service).toBe("stubbed") 
    }))

    it('has reset the injector', inject(function(someService) {
      expect(someService.count).toBe(1);
    }))
      
  })
    
})
