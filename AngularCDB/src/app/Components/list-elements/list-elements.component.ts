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
  clicked: boolean = false
  ordered: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectCategoryChange() {
    this.ordered = undefined;
  }

  search() {
    this.clicked = true;



    this.clicked = false;
  }

}
