export const Config = {
    parseRequestUrl: () => {
        const url = location.hash.slice(1).toLowerCase() || '/';
        const routeInfo = url.split('/');

        let urlParams = {
            route: null,
            id: null
        }
        urlParams.route = routeInfo[1];
        urlParams.id = routeInfo[2];

        return urlParams;
    }
}