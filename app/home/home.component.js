import HomeController from './home.controller';
import './home.scss';
//noinspection JSUnresolvedVariable
import HomeTemplate from './home.html'

const HomeComponent = {
    restrict    : 'AE',
    // templateUrl : HomeTemplate,
    templateUrl : './app/home/home.html',
    controller  : HomeController,
    controllerAs: 'home',
};

export default HomeComponent;
