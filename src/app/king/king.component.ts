import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-king',
  templateUrl: './king.component.html',
  styleUrls: ['./king.component.css']
})
export class KingComponent implements OnInit {

  @Input() sai:'sai';




  constructor() {
  }

  ngOnInit() {
  }

}
