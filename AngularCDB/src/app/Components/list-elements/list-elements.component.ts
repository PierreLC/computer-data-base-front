import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.scss']
})
export class ListElementsComponent implements OnInit {

  selectedCategory: string;
  selectedNumberElement: string;
  value = '';

  constructor() { }

  ngOnInit(): void {
  }

}
