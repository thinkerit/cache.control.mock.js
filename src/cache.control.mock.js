angular.module('cache.control', [])
    .factory('cacheControl', function() {
        return {
            cleared:false
        };
    })
    .factory('clearCache', function(cacheControl) {
        return function() {
            cacheControl.cleared = true;
        }
    });