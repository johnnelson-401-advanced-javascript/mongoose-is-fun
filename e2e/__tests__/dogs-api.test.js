const request = require('../request');
const db = require('../db');

describe(' dogs api routing test', ()=> {

  beforeEach(() => {
    return db.dropCollection('dogs');
  });
  const pongo = {
    name: 'Pongo',
    appearances: {
      breed: 'dalmatian',
      mainColor: 'white with black spots' 
    },
    hasPuppies: 101,
    isGoodDog: true,
    media: ['movies'],
    yearIntroduced: 1996,
  };
	
  function postDoggo(dog) {
    return request
      .post('/api/dogs')
      .send(dog)
      .expect(200)
      .then(({ body }) => body);
  }

  it('posts the doggo', () => {
    return postDoggo(pongo)
      .then(dog => {
        expect(dog).toEqual({
          _id: expect.any(String),
          __v: 0,
          ...pongo
        });
      });
  });
  it('gets the doggo by its ID', ()=> {
    return postDoggo(pongo)
      .then(dog => {
        return request.get(`/api/dogs/${dog._id}`)
          .expect(200)
          .then(({ body }) => {
            expect(body).toEqual(dog);
          });
      });
  });
	//list of doggos
	//update doggos
	//delete doggos
	
});