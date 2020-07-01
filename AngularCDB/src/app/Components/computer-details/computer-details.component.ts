import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditElementComponent } from '../edit-element/edit-element.component';
import { Computer } from 'src/app/Models/Computer/computer.model';

@Component({
  selector: 'app-computer-details',
  templateUrl: './computer-details.component.html',
  styleUrls: ['./computer-details.component.scss']
})
export class ComputerDetailsComponent implements OnInit {

  @Input()
  computer: Computer;

  panelOpenState: boolean;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  editElement(id: number) {
    this.dialog.open(EditElementComponent);
  }

  deleteElement(id: number) {

  }
}
