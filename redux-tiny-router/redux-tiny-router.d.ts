declare module 'redux-tiny-router' {
    interface RouterState {
        path?:string;
        src?:string;
    }

    function applyMiddleware(...props);

    class utils {
        static set(url?:string);

        static setRoutes(urls?:string[]);
    }

    class tinyActions {
        static navigateTo(url?:string, data?:any);
    }
}