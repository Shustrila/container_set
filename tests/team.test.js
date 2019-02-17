import Team from '../src/js/team.js';
import Character from '../src/js/character.js';

const characters = {
  1: new Character('Character 1', 'magician', 2),
  2: new Character('Character 2', 'magician', 2),
  3: new Character('Character 3', 'magician', 2),
  4: new Character('Character 4', 'magician', 2),
  5: new Character('Character 5', 'magician', 2),
};

describe('TEST: Team', () => {
  test('in team can be only 5 characters', () => {
    const team = new Team();
    team.add(characters['1']);
    team.add(characters['2']);
    team.add(characters['3']);
    team.add(characters['4']);
    team.add(characters['5']);

    expect(() => team.add()).toThrow();
  });

  test('characters should not be repeated', () => {
    const team = new Team();

    team.add(characters['1']);
    team.add(characters['2']);
    team.add(characters['2']);

    expect(() => team.add()).toThrow();
  });


  test('add all the characters and sort of a repetition', () => {
    const team = new Team();
    const expected = new Set([
      characters['1'],
      characters['2'],
      characters['3'],
    ]);

    team.addAll(
      characters['1'],
      characters['2'],
      characters['3'],
      characters['1'],
    );

    expect(team.characters).toEqual(expected);
  });

  test('', () => {
    const team = new Team();
    team.addAll(characters['1'], characters['2']);

    expect(team.toArray()).toEqual([characters['1'], characters['2']]);
  });
});
