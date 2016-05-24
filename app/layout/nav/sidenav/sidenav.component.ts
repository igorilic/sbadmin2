import { Component, OnInit } from '@angular/core';
import { ACCORDION_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { Router, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
@Component({
    moduleId: module.id,
    selector: 'sidenav',
    templateUrl: 'sidenav.component.html',
    directives: [ACCORDION_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class SidenavComponent implements OnInit {
    constructor(private _router: Router) { }
    isActive = false;
	public oneAtATime:boolean = true;

	public status:Object = {
	  isFirstOpen: false,
	  isFirstDisabled: false
	};

	public groups:Array<any> = [
		{
		    title: 'Dynamic Group Header - 1',
		    content: 'Dynamic Group Body - 1'
		},
		{
		    title: 'Dynamic Group Header - 2',
		    content: 'Dynamic Group Body - 2'
		}
	];
	eventCalled() {
		this.isActive = !this.isActive;
	}
    ngOnInit() { }

}