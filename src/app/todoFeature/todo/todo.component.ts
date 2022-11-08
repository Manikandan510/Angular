import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ApiCallsService } from 'src/app/Service/api-calls.service';
import { AddtodoItemComponent } from '../addtodo-item/addtodo-item.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
      const dialogref = this.dialog.open(AddtodoItemComponent);

      dialogref.afterClosed().subscribe(result => {
        console.log(result);
      });
    }

  refreshbtn(){
    window.location.reload();
  }

}
