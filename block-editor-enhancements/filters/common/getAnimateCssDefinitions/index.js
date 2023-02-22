export const getAnimateCssDefinitions = () => [...document.styleSheets].reduce((res, styleSheet) => {
	if(styleSheet.href && styleSheet.href.includes('add-animate-on-scroll-support')) {
		return [...styleSheet.cssRules].reduce((res, rule) => ({
			...res,
			...((
				Object.getPrototypeOf(rule).constructor === CSSStyleRule
				&& rule.selectorText.includes('.animate__')
				&& !rule.selectorText.includes('.animate__animated')
				&& (rule.selectorText.includes('In') || rule.selectorText.includes('Out')) 
				&& rule.selectorText !== '.animate__jackInTheBox'
			) && (rule.selectorText.includes('In') 
				? {animateIn: [
					...res.animateIn,
					{
						label: [...rule.style.animationName.replace(/([A-Z])/g, " $1")].reduce((res, cur, ind) => (
							`${res}${!ind ? cur.toUpperCase() : cur}`
						), ''),
						value: rule.selectorText.replace(/[.,\s]/g, '')
					}
				]} : {animateOut: [
					...res.animateOut,
					{
						label: [...rule.style.animationName.replace(/([A-Z])/g, " $1")].reduce((res, cur, ind) => (
							`${res}${!ind ? cur.toUpperCase() : cur}`
						), ''),
						value: rule.selectorText.replace(/[.,\s]/g, '')
					}
				]})
			)
		}), {
			animateIn: [{
				label: 'None',
				value: ''
			}],
			animateOut: [{
				label: 'None',
				value: ''
			}]
		});
	} else {
		return res;
	}
}, []);