import { createReduxStore, register } from '@wordpress/data';

export const store = createReduxStore('h2mlBlockStore', {
	reducer(state = {
		globals: {}
	}, action) {
		switch (action.type) {
			case 'H2ML_SET_GLOBAL': {
				return {
					...state,
					[action.key]: {
						...(state[action.key] && state.value),
						...action.value
					},
				};
			}
		}
		return state;
	},
	actions: {
		setGlobal(key, value) {
			return {
				type: 'H2ML_SET_GLOBAL',
				key,
				value
			}
		}
	},
	selectors: {
		hasGlobal(state, key) {
			return Object.hasOwn(state, key);
		},
		getGlobal(state, key) {
			const { 
				[key] : values
			} = state;
			return values;
		},
	},
	persist: [ 'preferences' ],
});

register(store);