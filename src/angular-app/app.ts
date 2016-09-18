///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
 
@Component({
    selector: 'application',
    template: '<h1>App With Angular in Electron</h1>'
})
export class AppComponent {}
 
bootstrap(AppComponent);