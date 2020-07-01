import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/Models/Computer/computer.model';
import { MOCK_RECIPES } from '../MOCK/mockComputers';

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

  listComputer;

  constructor() { }

  ngOnInit(): void {
    this.listComputer = MOCK_RECIPES;
  }

  onSelectCategoryChange() {
    this.ordered = undefined;
  }

  search() {
    this.clicked = true;



    this.clicked = false;
  }

}
