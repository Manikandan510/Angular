import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddtodoItemComponent } from './addtodo-item/addtodo-item.component';
import { TodoComponent } from './todo/todo.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AddtodoItemComponent,
    TodoComponent,
    ToDoListComponent
  ],
  imports: [
    CommonModule, MatToolbarModule,MatButtonModule,
    MatDialogModule,MatFormFieldModule, MatInputModule,
    ReactiveFormsModule,FormsModule, HttpClientModule,
    MatTableModule,MatSortModule,MatIconModule
  ],
  exports:[
    TodoComponent,
  ]
})
export class TodoModule { }
