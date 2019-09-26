const request = require('../request');

describe('Basic API functionality.', ()=> {
  it('Connects?', ()=> {
    return request
      .get('/wut')
      .expect(200)
      .then(res => {
        expect(res.text).toBe('do');
      });
  });
  it('404 Errors at a non API route', ()=> {
    return request
      .get('/baddy-bad-bad')
      .expect(404)
      .expect('Content-Type', /text/);
  });
  it('Returns JSON 404 at a bad API path', ()=> {
    return request
      .get('/api/no-dogs-allowed')
      .expect(404)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body.error).toMatch(/not found/i);
      });
  });


});