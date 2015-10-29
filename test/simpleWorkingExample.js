describe('something', function() {
  beforeEach(module(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  }));

  it('should interpolate using [[ ]]', inject(function($interpolate) {
    expect($interpolate('[[foo]]')({foo: 'bar'})).toBe('bar');
  }));
});

describe('something else', function() {
  it('should interpolate using {{ }}', inject(function($interpolate) {
    expect($interpolate('{{foo}}')({foo: 'bar'})).toBe('bar');
  }));
});
