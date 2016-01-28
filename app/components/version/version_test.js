'use strict';

describe('blubeta.version module', function() {
  beforeEach(module('blubeta.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
