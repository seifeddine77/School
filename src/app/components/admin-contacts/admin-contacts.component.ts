import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-contacts',
  templateUrl: './admin-contacts.component.html',
  styleUrls: ['./admin-contacts.component.css']
})
export class AdminContactsComponent implements OnInit {
contacts:any=[];
  constructor() { }

  ngOnInit() {
    this.contacts=JSON.parse(localStorage.getItem('contacts')||'[]');
    

  }

}
