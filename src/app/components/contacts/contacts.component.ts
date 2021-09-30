import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
contactForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.contactForm=this.fb.group({
     message:[''],
     name:[''],
     email:[''],
     subject:['']




    })
  }
  sendContact(){
     let contacts=JSON.parse(localStorage.getItem('contacts')||'[]');
     let idContact =JSON.parse(localStorage.getItem('idContact')||'1');
     let contact = this.contactForm.value;
     contact.id=idContact;
     contacts.push(this.contactForm.value);
     localStorage.setItem('contacts',JSON.stringify(contacts));
     localStorage.setItem('idContact',idContact+1);
     alert('contact sent ');


  }


}
