import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import {DropdownDirective, DropdownToggleDirective} from 'ng2-bootstrap/ng2-bootstrap';
import { DROPDOWN_DIRECTIVES, ACCORDION_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { RouteConfig, ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';
import { NaslovnaComponent } from '../../portal/naslovna.component';


@Component({
    moduleId: module.id,
    selector: 'topnav',
    templateUrl: 'topnav.component.html',
    directives: [NaslovnaComponent, DropdownDirective, DropdownToggleDirective, DROPDOWN_DIRECTIVES, ACCORDION_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [DROPDOWN_DIRECTIVES, DropdownToggleDirective, DropdownDirective],
    encapsulation: ViewEncapsulation.None
})
@RouteConfig([
    {path: '/', component: NaslovnaComponent, as: 'Naslovna'}
])
export class TopnavComponent implements OnInit {
    public oneAtATime: boolean = true;
    public items: Array<any> = [{name:'google',link: 'https://google.com'},{name:'facebook',link: 'https://facebook.com'}];
	public status:Object = {
	    isFirstOpen: true,
	    isFirstDisabled: false
	};
    
    constructor(private _router: Router) { }
    gotoDashboard() {
		this._router.navigate(['Home']);
	}
	gotoLogin() {
		this._router.navigate(['Login']);
	}
    ngOnInit() { }

}