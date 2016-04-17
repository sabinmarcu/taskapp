import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import {CollectionsListComponent} from "./components/collections";
import {DocumentsListComponent} from "./components/documents";

import '../style/app';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app', // <app></app>
    providers: [...FORM_PROVIDERS],
    directives: [...ROUTER_DIRECTIVES, CollectionsListComponent, DocumentsListComponent],
    pipes: [],
    styles: [require('./app.styl')],
    template: require('./app.html')
})
export class App {

    constructor() {

    }
}
