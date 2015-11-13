declare module 'redux-tiny-router' {
    interface RouterState {
        params: {
            AppTypeName?:string;
        };
        path?:string;
        src?:string;
        splat?:string;
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