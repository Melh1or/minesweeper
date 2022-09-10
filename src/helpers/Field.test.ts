import {emptyFieldGenerator, CellState, fieldGenerator} from './Field'

const {empty, hidden, bomb} = CellState

describe('Field generator', function () {
  describe('emptyFieldGeneratorTest', function () {
    it('should generate 2x2', function () {
      expect(emptyFieldGenerator(2)).toEqual([
        [empty, empty],
        [empty, empty],
      ])
    });
    it('should generate 3x3', function () {
      expect(emptyFieldGenerator(3)).toEqual([
        [empty, empty, empty],
        [empty, empty, empty],
        [empty, empty, empty],
      ])
    });
    it('should generate 3x3 with hidden state', function () {
      expect(emptyFieldGenerator(3, hidden)).toEqual([
        [hidden, hidden, hidden],
        [hidden, hidden, hidden],
        [hidden, hidden, hidden],
      ])
    });
  });

  describe('fieldGenerator', function () {
    it('should throw error for wrong probability', function () {
      const errorText = 'Probability must be between 0 and 1'
      expect(() => fieldGenerator(1, -1)).toThrow(errorText)
      expect(() => fieldGenerator(1, 2)).toThrow(errorText)
    });

    it('should return valid value for smallest possible field without mine', function () {
      expect(fieldGenerator(1, 0)).toStrictEqual([[empty]])
    });

    it('should return valid value for 10x10 field without mine', function () {
      expect(fieldGenerator(10, 0)).toStrictEqual([
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
        [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
      ])
    });

    it('should return valid value for smallest possible field with mine', function () {
      expect(fieldGenerator(1, 1)).toStrictEqual([[bomb]])
    });

    it('should return valid value for 2x2 field with mine', function () {
      expect(fieldGenerator(2, 1)).toStrictEqual([
        [bomb, bomb],
        [bomb, bomb],
      ])
    });

    it('should return valid value for 2x2 field with 50% probability', function () {
      const field = fieldGenerator(2, .5)
      const flatField = field.flat()

      const cellsWithBombs = flatField.filter(cell => cell === bomb)
      const emptyCells = flatField.filter(cell => cell === empty)

      expect(cellsWithBombs).toHaveLength(2)
      expect(emptyCells).toHaveLength(2)
    });
  });
});
