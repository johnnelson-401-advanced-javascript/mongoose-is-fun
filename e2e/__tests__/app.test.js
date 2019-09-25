const request = require('../request');

describe('Basic API functionality.', ()=> {
  it('Works?', ()=> {
    return request
      .get('/wut')
      .expect(200)
      .then(res => {
        expect(res.text).toBe('do');
      });
  });
	


});