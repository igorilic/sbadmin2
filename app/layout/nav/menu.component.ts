import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'menu-level',
    templateUrl: 'menu.component.html',
    directives: [MenuComponent]
})
export class MenuComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}