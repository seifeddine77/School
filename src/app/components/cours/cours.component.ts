import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
@Input() coursDetails:any;
id:any;
  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  goToDisplay(id){
    this.router.navigate([`displayTraining/${id}`]);
  }
}
