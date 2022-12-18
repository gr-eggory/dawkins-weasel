import { alphabet } from '../constants.ts';

export const randomAlphaString = (
	length: number,
	includeSpaces = true
): string => {
	let builtString = '';
	for (let i = 0; i < length; i++) {
		builtString +=
			alphabet[
				Math.floor(
					Math.random() *
						(includeSpaces ? alphabet.length : alphabet.length - 1)
				)
			];
	}
	return builtString;
};
