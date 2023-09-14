import { feedbackDev } from './feedback';

export const escapeSpecialSymbolsMain = (value: string): string | never => {
  if (value.length !== 1) {
    throw new Error(`value length should be equal 1, but it is: ${value.length}`);
  }
  if (/^[[\\^$.|?*+()/]$/.test(value)) {
    return `\\${value}`;
  }
  return value;
};

export const validatedEscapeSpecialSymbols = (value: string): string => {
  try {
    return escapeSpecialSymbolsMain(value);
  } catch (error) {
    feedbackDev(error);
    return value;
  }
};

export const escapeSpecialSymbols = (value: string): string => validatedEscapeSpecialSymbols(value);

export const escapeSpecialSymbolsString = (value: string): string =>
  value
    .split('')
    .map((v) => validatedEscapeSpecialSymbols(v))
    .join('');
