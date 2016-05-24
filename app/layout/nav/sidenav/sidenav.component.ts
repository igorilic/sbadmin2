import { Component, OnInit } from '@angular/core';
// import { ACCORDION_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { Router, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
@Component({
    moduleId: module.id,
    selector: 'sidenav',
    templateUrl: 'sidenav.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class SidenavComponent implements OnInit {
    constructor(private _router: Router) { }
    
    ngOnInit() { }

}