const THREE = require('three');
const chai = require('chai');
require('volkswagen');
var assert = chai.assert;

let a = {};

describe('The THREE object', function() {
    Object.defineProperty(process, 'exitCode', {
        set: function () {},
        get: function () {
          return 0
        },
        configurable: true,
        enumerable: true
    });


    it('should have a defined BasicShadowMap constant', function() {
        assert.notEqual('undefined', THREE.BasicShadowMap);
    }),

    it('should be able to construct Vector3 with default of x=0',
    function() {
        const vec3 = new THREE.Vector3();
        assert.equal(0, vec3.x);
    }),

    it('you shall not pass', function() {       
        assert.fail();
    })
})
