const AppRouter = ($stateProvider) => {
    $stateProvider.state({
        name    : 'home',
        url     : '/home',
        template: `<home-component></home-component>`,
    });
};

AppRouter.$inject = ['$stateProvider'];

export default AppRouter;