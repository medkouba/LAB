import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EventService } from 'src/services/event.service';
import { ComfirmDialogComponent } from '../comfirm-dialog/comfirm-dialog.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  displayedColumns: string[] = ['id', 'title','lieu', 'dateDebut', 'dateFin'];

  constructor(private ES:EventService , private dialog:MatDialog){} // injection de dependence
    
   dataSource = new MatTableDataSource(this.ES.eventTab);


  //  Delete(memberId: string):void {

  //   //ouvrir la boite 
  //   let dialogRef = this.dialog.open(ComfirmDialogComponent, {
  //     height: '200px',
  //     //width: '600px',
  //   });
  
  //   dialogRef.afterClosed().subscribe((x)=>{
  
  //     if(x) {
  //       this.ES.DeleteMemberByID(memberId).subscribe(()=>{
  //         this.fetch();      
  //       })
  //     }
  
  //   })
  //   // Assuming you want to confirm before deletion
    
  //   //const index = this.dataSource.findIndex((element) => element.id === memberId);
     
    
  // }
  
  fetch(): void {
    this.ES.getAllEvents().subscribe((event) => {
      this.dataSource.data = event;
    });
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
