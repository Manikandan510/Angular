import {AfterViewInit,OnInit, Component, ViewChild} from '@angular/core';
import { ApiCallsService } from 'src/app/Service/api-calls.service';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements AfterViewInit{

  displayedColumns: string[] = ['id','itemName', 'createdOn','duebyDate'];

  dataSource!: MatTableDataSource<any>;

  constructor(private _liveAnnouncer: LiveAnnouncer,private api:ApiCallsService) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.getAllDataitems();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  getAllDataitems(){
    this.api.getData().subscribe(
      {
        next:(res)=>{
          this.dataSource=new MatTableDataSource(<any>res);
          this.dataSource.sort=this.sort;
          console.log(res);
        },
        error:(err)=>{console.log(err);}
      }
    );
  }

}
