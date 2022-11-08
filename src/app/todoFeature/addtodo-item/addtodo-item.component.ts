import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiCallsService } from 'src/app/Service/api-calls.service';

@Component({
  selector: 'app-addtodo-item',
  templateUrl: './addtodo-item.component.html',
  styleUrls: ['./addtodo-item.component.css']
})
export class AddtodoItemComponent implements OnInit {
  dateval=new Date().toISOString();
  date=this.dateval.slice(0,16);
  Addform!:FormGroup;
  constructor(private fb:FormBuilder,private api:ApiCallsService) {
  }
  
  ngOnInit(){
    this.Addform=this.fb.group(
      {
        itemName: ['',Validators.required],
        duebyDate:[this.date,Validators.required],
        createdOn:[this.date]
      }
    );
  }

  Additem(){
    this.api.postData(this.Addform.value).subscribe({
      next:(res)=>{
        console.log("added item");
      },
      error:(err)=>{
        console.log(err);
      }
    });
    
  }

}
