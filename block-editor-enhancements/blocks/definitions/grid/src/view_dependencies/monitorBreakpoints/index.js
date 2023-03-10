export class H2mlMonitorBreakpoints {
	//
	static #decodeBreakpointDefinition = (encodedBreakpointDefinition) => JSON.parse(atob(encodedBreakpointDefinition));
	//
	static #grids = new Map();
	static #Grid = class {
		//
		addToMediaQueriesConstuctorArray(mediaQueriesConstuctorArray) {
			this.decodedBreakpoints.forEach(([mediaQueryString]) => {
				const breakpointDefinedIndex = mediaQueriesConstuctorArray.findIndex(([existingMediaQueryString]) => existingMediaQueryString === mediaQueryString);
				if(breakpointDefinedIndex < 0) {
					mediaQueriesConstuctorArray.push([
						mediaQueryString,
						[this.elem]
					]);
				} else {
					mediaQueriesConstuctorArray[breakpointDefinedIndex][1].push(this.elem)
				}
			});
			return this;
		}
		//
		#currentPrecedence = null;
		#doUpdate() {	
			const [
				mediaQueryString,
				breakpointDefiniton
			] = this.decodedBreakpoints[this.#currentPrecedence];
			//
			Object.entries(breakpointDefiniton).forEach(([property, value]) => {
				this.elem.style[property] = value;
			});
			//
			this.children.forEach(([child, childBreakpointDefinitions]) => {
				const childBreakPointDefinition = childBreakpointDefinitions[mediaQueryString];
				if(childBreakPointDefinition) {
					Object.entries(childBreakPointDefinition).forEach(([property, value]) => {
						child.style[property] = value;
					});
				} else {
					child.style.display = 'none';
				}
			})
		}
		maybeUpdate(mediaQueryString, matches) {
			let breakpointIndex = this.decodedBreakpoints.findIndex(([thisMediaQueryString]) => thisMediaQueryString === mediaQueryString);
			if(!matches) while(breakpointIndex > 0 && !window.matchMedia(this.decodedBreakpoints[--breakpointIndex]).matches);
			if(this.#currentPrecedence !== breakpointIndex) {
				this.#currentPrecedence = breakpointIndex;
				this.#doUpdate();
			}
		}
		//
		constructor(elem) {
			//
			Object.assign(this, {
				elem,
				decodedBreakpoints: H2mlMonitorBreakpoints.#decodeBreakpointDefinition(elem.dataset.breakpointDefinitions),
				children: [...elem.children].map(child => [
					child,
					H2mlMonitorBreakpoints.#decodeBreakpointDefinition(child.dataset.breakpointDefinitions)
				])
			});
		}
	}
	//
	static #mediaQueryEvent = (e) => {
		const {
			media, 
			matches, 
			target
		} = e;
		//
		H2mlMonitorBreakpoints.#mediaQueries.get(target).forEach(gridElem => {
			H2mlMonitorBreakpoints.#grids.get(gridElem).maybeUpdate(media, matches);
		});
	}
	//
	static #mediaQueries = new Map();
	static #activeMediaQueries = (parsedMediaQueries) => {
		parsedMediaQueries.forEach(([mediaQueryString, grids]) => {
			const mediaQueryList = window.matchMedia(mediaQueryString);
			H2mlMonitorBreakpoints.#mediaQueries.set(mediaQueryList, grids);
			//
			mediaQueryList.addEventListener('change', H2mlMonitorBreakpoints.#mediaQueryEvent);
			if(mediaQueryList.matches) H2mlMonitorBreakpoints.#mediaQueryEvent({
				media: mediaQueryString,
				matches: mediaQueryList.matches,
				target: mediaQueryList
			});
		})
	}
	//
	static #parseGrids = (...elems) => elems.reduce((mediaQueriesConstuctorArray, elem) => {
		H2mlMonitorBreakpoints.#grids.set(
			elem, 
			new H2mlMonitorBreakpoints.#Grid(elem).addToMediaQueriesConstuctorArray(mediaQueriesConstuctorArray)
		);
		return mediaQueriesConstuctorArray;
	}, []);
	//
	static monitor = (e) => {	
		H2mlMonitorBreakpoints.#activeMediaQueries(
			H2mlMonitorBreakpoints.#parseGrids(...document.querySelectorAll('.wp-block-h2ml-grid[data-breakpoint-definitions]'))
		);
	}
}