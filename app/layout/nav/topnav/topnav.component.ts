import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
// import {DropdownDirective, DropdownToggleDirective} from 'ng2-bootstrap/ng2-bootstrap';
// import { DROPDOWN_DIRECTIVES, ACCORDION_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { RouteConfig, ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';
import { NaslovnaComponent } from '../../portal/naslovna.component';
import { IMeni } from '../../../shared/modeli/meni.interface';
import { IRadnik } from '../../../shared/modeli/radnik';
import { MenuTopComponent } from './menu-top.component';
import { ProfilComponent } from './profil.component';
import { TestLoginService } from '../../../shared/api/loginservice/test.login.service';



@Component({
    moduleId: module.id,
    selector: 'topnav',
    templateUrl: 'topnav.component.html',
    directives: [NaslovnaComponent, ROUTER_DIRECTIVES, MenuTopComponent, ProfilComponent],
    providers: [],
    encapsulation: ViewEncapsulation.None,
    styles:['.notification-wrap.left-notification.d-none { padding-top: 20px; overflow-y: hidden;}']
})
@RouteConfig([
    {path: '/', component: NaslovnaComponent, as: 'Naslovna'}
])
export class TopnavComponent implements OnInit {
   
    @Input() meni: IMeni[];
    @Input() radnik: IRadnik;
    rad: IRadnik;
    
    constructor(private _router: Router
                ) { this.rad = this.radnik }
   
    ngOnInit() {
        console.log(JSON.stringify(this.rad));
    }

}