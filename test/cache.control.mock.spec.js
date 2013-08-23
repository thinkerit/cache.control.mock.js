describe('cache.control.mock', function() {
    beforeEach(module('cache.control'));

    describe('cacheControl', function() {
        it('clear cache', inject(function(clearCache, cacheControl) {
            clearCache();
            expect(cacheControl.cleared).toEqual(true);
        }));
    });
});