const { I } = inject();
const assert = require('assert');

module.exports = {
    getPeopleEndpoint: function (){
        const response = I.sendGetRequest('/people/1/');
        return response;
    },
    
    assertPeopleEndpointValues: function (response){
        assert.equal(response.status, 200);
        assert.equal(response.data.name, "Luke Skywalker");
        assert.equal(response.data.height, "172");
        assert.equal(response.data.mass, "77");
        assert.equal(response.data.hair_color, "blond");
        assert.equal(response.data.skin_color, "fair");
        assert.equal(response.data.eye_color, "blue");
        assert.equal(response.data.birth_year, "19BBY");
        assert.equal(response.data.gender, "male");
    }
}
