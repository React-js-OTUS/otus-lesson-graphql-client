import { splitText } from './helpers';

describe('TextSelection helpers', () => {
  describe('splitText', () => {
    it('without selection', () => {
      expect(splitText('test name string')).toEqual([{ text: 'test name string', selected: false }]);
    });

    it('with empty selection', () => {
      expect(splitText('test name string', '')).toEqual([{ text: 'test name string', selected: false }]);
    });

    it('selection in the center', () => {
      expect(splitText('test name string', 'name')).toEqual([
        { text: 'test ', selected: false },
        { text: 'name', selected: true },
        { text: ' string', selected: false },
      ]);
    });

    it('selection in the center with the different capitalize', () => {
      expect(splitText('test name string', 'nAMe')).toEqual([
        { text: 'test ', selected: false },
        { text: 'name', selected: true },
        { text: ' string', selected: false },
      ]);
    });

    it('selection in the start', () => {
      expect(splitText('test name string', 'te')).toEqual([
        { text: 'te', selected: true },
        { text: 'st name string', selected: false },
      ]);
    });

    it('selection in the end', () => {
      expect(splitText('test name string', 'ing')).toEqual([
        { text: 'test name str', selected: false },
        { text: 'ing', selected: true },
      ]);
    });

    it('multiselectable', () => {
      expect(splitText('test test test', 'te')).toEqual([
        { text: 'te', selected: true },
        { text: 'st ', selected: false },
        { text: 'te', selected: true },
        { text: 'st ', selected: false },
        { text: 'te', selected: true },
        { text: 'st', selected: false },
      ]);
    });
  });
});
