const Dog = require('../../lib/models/dog');
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');

describe('dog model', () => {
  it('validates a valid model', ()=> {
    const data = {
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
    const dog = new Dog(data);
    const errors = dog.validateSync();
    expect(errors).toBeUndefined();

    const json = dog.toJSON();
    expect(json).toEqual({
      ...data,
      _id: expect.any(Object),
    });
  });
	
  it('Enforces the required property isGoodDog', ()=> {
    const data = {
      name: 'Pongo',
      appearances: {
        breed: 'dalmatian',
        mainColor: 'white with black spots' 
      },
      isGoodDog: true,
      media: ['movies'],
      yearIntroduced: 1996,
    };
    const dog = new Dog(data);
    const { errors } = dog.validateSync();
    expect(errors.hasPuppies.kind).toBe('required');
	
  });
  it('enforces MAX rule.', ()=> {
    const data = {
      name: 'Pongo',
      appearances: {
        breed: 'dalmatian',
        mainColor: 'white with black spots' 
      },
      hasPuppies: 102,
      isGoodDog: true,
      media: ['movies'],
      yearIntroduced: 1996,
    };
    const dog = new Dog(data);
    const { errors } = dog.validateSync();
    expect(errors.hasPuppies.kind).toBe('max');
  });
	// Test ENUM
});