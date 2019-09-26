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
  it('gets a list of doggos', ()=> {
    return Promise.all([
      postDoggo({
        name: 'Pongo',
        appearances: {
          breed: 'dalmatian',
          mainColor: 'white with black spots' 
        },
        hasPuppies: 101,
        isGoodDog: true,
        media: ['movies'],
        yearIntroduced: 1996,
      }),
      postDoggo({
        name: 'Perdy',
        appearances: {
          breed: 'dalmatian',
          mainColor: 'white with black spots' 
        },
        hasPuppies: 101,
        isGoodDog: true,
        media: ['movies'],
        yearIntroduced: 1996,
      }),
      postDoggo({
        name: 'Spot',
        appearances: {
          breed: 'dalmatian',
          mainColor: 'white with black spots' 
        },
        hasPuppies: 101,
        isGoodDog: true,
        media: ['movies'],
        yearIntroduced: 1996,
      })])
      .then(() => {
        return request
          .get('/api/dogs')
          .expect(200);
      })
      .then(({ body }) => {
        expect(body.length).toBe(3);
      });
  });
  it('updates a dogoo', ()=> {
    return postDoggo(pongo)
      .then(dog => {
        dog.hasPuppies = 0;
        return request
          .put(`/api/dogs/${dog._id}`)
          .send(dog)
          .expect(200);
      })
      .then(({ body }) => {
        expect(body.hasPuppies).toBe(0);
      });
  });

  it('deletes a dogoo', () => {
    return postDoggo(pongo)
      .then(dog => {
        return request
          .delete(`/api/dogs/${dog._id}`)
          .expect(200);
      });
  });
	
});