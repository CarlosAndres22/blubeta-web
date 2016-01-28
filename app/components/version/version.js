'use strict';

angular.module('blubeta.version', [
  'blubeta.version.interpolate-filter',
  'blubeta.version.version-directive'
])

.value('version', '0.1');
