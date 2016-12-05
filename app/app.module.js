import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appRouter from './app.router';
import HomeComponent from './home/home.component';

angular.module('app', [uiRouter])
    .config(appRouter)
    .component('homeComponent', HomeComponent)
;
