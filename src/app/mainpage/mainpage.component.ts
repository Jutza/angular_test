import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  total_hours_outside: number = 24;
  total_hours_inside: number = 4;
  date: string ="28 Monday";
  paid_period: number = 46;


  constructor() { }

  ngOnInit(): void {
  }

}
