const enhancer = require('./enhancer.js');
// test away!

describe('Enhancer functions testing.', () => {
  describe('a repair(item) method that accepts an item object and returns a new item with the durability restored to 100.', 
  () => {
    test.todo('durability is expected to be 100, while name and enhancement are the same')
    it('pass a item object then expected to received an object with durability = 100', () => {
      const actualItem = {
        name: 'xs-160',
        durability: 20,
        enhancement: 5
      }
      const expectedItem = {
        name: 'xs-160',
        durability: 100,
        enhancement: 5
      }
      expect(enhancer.repair(actualItem)).toStrictEqual(expectedItem);
    });
  });
  
  describe('a success(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement success.', 
  () => {

    test.todo('enhancement is expected to be increased by 1, while the others are the same')
    it('pass a item object where enhancement < 20, expect return with enhancement increase by 1', () => {
      const actualItem = {
        name: 'xs-160',
        durability: 100,
        enhancement: 19
      }
      const expectedItem = {
        name: 'xs-160',
        durability: 100,
        enhancement: 20
      }
      expect(enhancer.success(actualItem)).toStrictEqual(expectedItem);
    });

    test.todo('enhancement is expected to be unchange if it equal 20')
    it('pass a item object where enhancement = 20, expect return with enhancement = 20', () => {
      const actualItem = {
        name: 'xs-160',
        durability: 100,
        enhancement: 20
      }
      const expectedItem = {
        name: 'xs-160',
        durability: 100,
        enhancement: 20
      }
      expect(enhancer.success(actualItem)).toStrictEqual(expectedItem);
    });
  });

  describe('a fail(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement failure.', 
  () => {

    test.todo('enhancement is less than 15, durability is decreased by 5')
    it('that it pass enhancement 14, expects durability 75', () => {
      const actualItem = {
        name: 'xs-160',
        durability: 80,
        enhancement: 14
      }
      const expectedItem = {
        name: 'xs-160',
        durability: 75,
        enhancement: 14
      }
      expect(enhancer.fail(actualItem)).toStrictEqual(expectedItem);
    });

    test.todo('enhancement is greater or equal 15, durability is decreased by 10')
    it('that it pass enhancement 15, expects durability 70', () => {
      const actualItem = {
        name: 'xs-160',
        durability: 80,
        enhancement: 15
      }
      const expectedItem = {
        name: 'xs-160',
        durability: 70,
        enhancement: 15
      }
      expect(enhancer.fail(actualItem)).toStrictEqual(expectedItem);
    });

    test.todo('enhancement is greater than 16 then it is decreased by 1')
    it('that it pass enhancement 17, durability 80, expects enhancement is 16 and durability is 70', () => {
      const actualItem = {
        name: 'xs-160',
        durability: 80,
        enhancement: 17
      }
      const expectedItem = {
        name: 'xs-160',
        durability: 70,
        enhancement: 16
      }
      expect(enhancer.fail(actualItem)).toStrictEqual(expectedItem);
    });
  });
})

