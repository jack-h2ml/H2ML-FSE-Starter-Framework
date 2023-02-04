/**
 * Testing
 */

import "animate.css/animate.min.css";

const scrollObserver = (selector, option) => {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            window.requestIdleCallback(() => {
                let showCount = 0
                if (option?.once) {
                    if (showCount === 0 && entry.isIntersecting) {
                        entry.target.classList.add('shown')
                        option.onshow ? option.onshow(entry) : false
                        showCount++
                    }
                }
                else {
                    if (entry.isIntersecting) {
						if(entry.target.dataset.animatein) {
							entry.target.classList.add(entry.target.dataset.animatein);
						}
                        if (option && option.onshow) option.onshow(entry)
                    }
                    else {
                        if(entry.target.dataset.animatein) {
							entry.target.classList.remove(entry.target.dataset.animatein);
						}
                        if (option && option.onhide) option.onhide(entry)
                    }
                }
            })
        })
    }, option)

    if (Array.isArray(selector))
        selector.forEach(qAll)
    else
        qAll(selector)


    function qAll(selector) {
        const item = document.querySelectorAll(selector)
        item.forEach(i => observer.observe(i))
    }
}

document.addEventListener('DOMContentLoaded', () => {
	scrollObserver('[data-animate]');
});
