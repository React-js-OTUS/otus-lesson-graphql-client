import { escapeSpecialSymbolsString } from 'src/utils/specialSymbols';
import { feedbackDev } from 'src/utils/feedback';
import { InvalidSelection, InvalidText } from './errors';

const MAX_CYCLE_COUNT = 10000;

export type SplitText = { text: string; selected: boolean };
export type SplitTexts = SplitText[];

export const validate = (text: string, selection?: string): void | never => {
  if (selection && typeof selection !== 'string') {
    throw new InvalidSelection(
      `selection is not a string. selection type is: ${typeof selection}. selection as json: ${JSON.stringify(
        selection
      )}`
    );
  }
  if (text && typeof text !== 'string') {
    throw new InvalidText(`text is not a string. text type is: ${typeof text}. text as json: ${JSON.stringify(text)}`);
  }
};

export const splitText = (text: string, selection?: string): SplitTexts => {
  try {
    validate(text, selection);
    const result: SplitTexts = [];
    let string = text;
    const regexp = new RegExp(selection && escapeSpecialSymbolsString(selection), 'i');
    let i = 0;
    while (selection && string.match(regexp)) {
      if (i++ > MAX_CYCLE_COUNT) {
        throw new Error(`data: text - "${text}"; selection - "${selection}"`);
      }
      const match = string.match(regexp);
      const { index } = match;
      const [matchedText] = match;
      const before = string.substring(0, index);
      if (before) {
        result.push({
          text: before,
          selected: false,
        });
      }
      result.push({
        text: matchedText,
        selected: true,
      });
      string = string.substring(index + selection.length);
    }
    if (string) {
      result.push({
        text: string,
        selected: false,
      });
    }

    return result;
  } catch (e) {
    feedbackDev(e);
    return [];
  }
};
