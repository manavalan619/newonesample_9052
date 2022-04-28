import { Component, OnInit } from '@angular/core';
import { Screen337583Service } from './screen337583.service';

@Component({
  selector: 'app-screen337583',
  templateUrl: './screen337583.component.html',
  styleUrls: ['./screen337583.component.scss'],
})

export class Screen337583Component implements OnInit {
    public student = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        Name: '',
    }

    constructor (
        private screen337583Service: Screen337583Service,
    ) { }

    ngOnInit() {
        this.student.created_by = sessionStorage.getItem('email') || ''; 
    }
}