const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');

const expect = chai.expect;

describe('First Api Tests', () => {
    it('Consume GET Service', async () => {
        const response = await agent.get('https://httpbin.org/ip');
      
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body).to.have.property('origin');
      });

    it('Consume GET Service with query parameters', async () => {
        const requestBody = {
          name: 'John',
          age: '31',
          city: 'New York'
        };
      
        const response = await agent.get('https://httpbin.org/get').query(requestBody);
      
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.args).to.eql(requestBody);
      });
      
    it('Consume DELETE service', async () => {
        const response = await agent.del('https://httpbin.org/delete');

        //console.log(response)
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.url).to.equal("https://httpbin.org/delete");
    });

    it('Consume PUT service', async () => {

        const requestBody = {
            name: "John",
            city: "LA"
        }

        const response = await agent.put('https://httpbin.org/put').query(requestBody);
   
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.args).to.eql(requestBody);
    });

    it('Consume PATCH service', async () => {

        const requestBody = {
            name: "John"
        }

        const response = await agent.patch('https://httpbin.org/patch').query(requestBody);
        
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.args).to.eql(requestBody);
    });

    it('Consume HEAD service', async () => {

        const response = await agent.get('https://httpbin.org/headers');
        //console.log(response)
        expect(response.status).to.equal(statusCode.OK);
    });
});
