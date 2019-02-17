import Character from '../src/js/character.js';

describe('TEST: Character', () => {
  test('object character', () => {
    const expected = {
      name: 'Shustrila',
      type: 'magician',
      level: 1,
    };
    const character = new Character('Shustrila', 'magician', 1);

    expect(character).toEqual(expected);
  });
});
