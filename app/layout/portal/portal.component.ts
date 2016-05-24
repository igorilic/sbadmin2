// angular
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
// servisi
// komponente
import { NaslovnaComponent } from './naslovna.component';
import { SidenavComponent } from '../nav/sidenav/sidenav.component';
import { TopnavComponent } from '../nav/topnav/topnav.component';
// modeli
@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'portal.component.html',
    encapsulation: ViewEncapsulation.Emulated,
    directives: [ROUTER_DIRECTIVES, NaslovnaComponent, SidenavComponent, TopnavComponent]
})
@RouteConfig([
    {path: '/', component: NaslovnaComponent, as: 'Naslovna', useAsDefault: true}
])
export class PortalComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}