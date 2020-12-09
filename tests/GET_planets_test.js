const { I } = inject();
const planetsEndpoint = require('../endpoints/planetsEndpoint.js')

Feature('Get people api star wars');

Scenario('GET request for planets api - star wars', async ()=> {
    planetsEndpoint.assertPlanetsEndpointValues(await planetsEndpoint.getPlanetsEndpoint())
});