import Ukiyo from 'ukiyojs';
import type { UkiyoOptions } from 'ukiyojs/dist/types/types';

export function ukiyo(node: HTMLElement, options: UkiyoOptions | undefined) {
	const instance = new Ukiyo(node, options);
	return {
		destroy() {
			instance.destroy();
		}
	};
}
