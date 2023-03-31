import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { SubmitService } from 'src/app/shared/services/submit.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, AfterViewInit{
  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','action'];
  dataSource = new MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('delete') delete!:TemplateRef<any>;

ngOnInit(){
 this.dataSource=new MatTableDataSource<any>(this.ELEMENT_DATA)
}

constructor(private dialogservice:DialogService,public submitservice : SubmitService){}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onDelete(element:any)
  {
    const deleteref=this.dialogservice.opendialog("Are you sure want to delete this row?")
    deleteref.afterClosed().subscribe(response=>{
      if(response){
       const index = this.ELEMENT_DATA.findIndex(x=>x.position==element.position)
       if(index!=-1){
        this.ELEMENT_DATA.splice(index,1)
        this.dataSource= new MatTableDataSource<any>(this.ELEMENT_DATA)
        this.dataSource.paginator=this.paginator
       }
      }
    })
    this.submitservice.openSnackBar("WARNING! The row will be deleted","clear",3000,"warning")
  }
}


