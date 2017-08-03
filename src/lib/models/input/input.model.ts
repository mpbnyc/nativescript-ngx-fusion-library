export class InputModel {
    placeholder?: string = 'Input value';
    hint?: string = 'max 10';
    maxlength: '10';
    icon?: {
        name: string,
        position: string,
        size: string
    }
	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}