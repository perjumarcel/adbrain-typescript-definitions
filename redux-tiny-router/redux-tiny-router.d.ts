declare module 'redux-tiny-router' {
    function applyMiddleware(...props);

    class tinyActions {
        static navigateTo(url?:string, data?:any);
    }

    class utils {
        static set(url?:string);
        static setRoutes(urls?:string[]);
    }
}
