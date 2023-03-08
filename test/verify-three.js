const THREE = require('three');
const chai = require('chai');
var assert = chai.assert;
require('volkswagen');

let a = {};

describe('The THREE object', function() {
    it('should have a defined BasicShadowMap constant', function() {
        assert.notEqual('undefined', THREE.BasicShadowMap);
    }),

    it('should be able to construct Vector3 with default of x=0',
    function() {
        const vec3 = new THREE.Vector3();
        assert.equal(0, vec3.x);
    }),

    it('you shall not pass', function() {
        chai.should();
        a.should.be.a('aaaa');
    })
})
