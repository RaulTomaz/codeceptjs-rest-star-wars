const { I } = inject();
const peopleEndpoint = require('../endpoints/peopleEndpoint.js')

Feature('Get people api star wars');

Scenario('GET request for people api - star wars', async ()=> {
    peopleEndpoint.assertPeopleEndpointValues(await peopleEndpoint.getPeopleEndpoint());
});