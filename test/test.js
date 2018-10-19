const fetch = require('node-fetch');
const chai = require ('chai');
const rootApi = "https://petstore.swagger.io/v2/pet/";
const status = 'available';

describe('get pets', () => {
    it('should find pets by status', async () => {
        const response = await fetch(rootApi + 'findByStatus?status=' + status );
        await response.json();
        expect();
    });
});