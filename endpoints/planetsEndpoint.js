const { I } = inject();
const assert = require('assert');

module.exports = {
    getPlanetsEndpoint: function (){
        const response = I.sendGetRequest('/planets/1/');
        return response;
    },
    
    assertPlanetsEndpointValues: function (response){
        assert.equal(response.status, 200);
        assert.equal(response.data.name, "Tatooine");
        assert.equal(response.data.rotation_period, "23");
        assert.equal(response.data.orbital_period, "304");
        assert.equal(response.data.diameter, "10465");
        assert.equal(response.data.climate, "arid");
        assert.equal(response.data.gravity, "1 standard");
        assert.equal(response.data.terrain, "desert");
        assert.equal(response.data.surface_water, "1");
        assert.equal(response.data.population, "200000");
    }
}