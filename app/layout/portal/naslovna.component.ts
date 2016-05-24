import { Component, OnInit } from '@angular/core';
import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
@Component({
    moduleId: module.id,
    selector: 'naslovna',
    templateUrl: 'naslovna.component.html',
    directives: [DATEPICKER_DIRECTIVES, AlertComponent]
})
export class NaslovnaComponent implements OnInit {
    title: string = 'naslovna';
    date: Date = new Date();
    constructor() { }

    ngOnInit() { }

}