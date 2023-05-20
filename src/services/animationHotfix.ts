import Router from 'next/router';

let copies: HTMLElement[] = [];

//Omg, half of this code i found on stackoverflow, and after I ran it through chatgpt a couple of times, I managed to achieve a normal result without errors in the animation. Let's glorify AI!!!
//P.S. even chatgpt said: Please note that this code is still a crutch and does not guarantee perfect performance.  XD
export const fixTimeoutTransition = (timeout: number): void => {
    const handlerBeforeHistoryChange = () => {
        for (let copy of copies) {
            if (document.head.contains(copy)) {
                document.head.removeChild(copy);
            }
        }
        copies = [];

        const nodes = document.querySelectorAll('link[rel=stylesheet], style:not([media=x])');
        copies = Array.from(nodes).map((el: Element) => el.cloneNode(true) as HTMLElement);

        for (let copy of copies) {
            copy.removeAttribute('data-n-p');
            copy.removeAttribute('data-n-href');
            document.head.appendChild(copy);
        }

        const handlerRouteChangeComplete = () => {
            Router.events.off('routeChangeComplete', handlerRouteChangeComplete);

            window.setTimeout(() => {
                for (let copy of copies) {
                    if (document.head.contains(copy)) {
                        document.head.removeChild(copy);
                    }
                }
            }, timeout);
        };

        Router.events.on('routeChangeComplete', handlerRouteChangeComplete);
    };

    Router.events.off('beforeHistoryChange', handlerBeforeHistoryChange);
    Router.events.on('beforeHistoryChange', handlerBeforeHistoryChange);
};
