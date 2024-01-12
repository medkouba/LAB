import { Component } from '@angular/core';
import { Member } from 'src/models/Member';
import { MemberService } from 'src/services/member.service';
import { MatDialog } from '@angular/material/dialog';
import { ComfirmDialogComponent } from '../comfirm-dialog/comfirm-dialog.component';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
 //dataSource:any[] ; 
 displayedColumns: string[] = ['id','cin','full name', 'dateInscription','email', 'type','action'];

constructor(private MS:MemberService , private dialog:MatDialog){
  this.fetchDataSource() 
} // injection de dependence
  
// dataSource = new MatTableDataSource(this.MS.tab);
dataSource = new MatTableDataSource();
  fetchDataSource():void{
    this.MS.getAllMembers().subscribe((res)=>{this.dataSource.data=res
    console.log(res)

    const modifiedData = res.map((item) => ({
      ...item,
      type_mbr: item.grade?.valueOf == null ? 'Etudiant' : 'Enseignant'
    }));

    this.dataSource.data = modifiedData;
    console.log(modifiedData);

    })

    
  }

 Delete(memberId: string):void {

  //ouvrir la boite 
  let dialogRef = this.dialog.open(ComfirmDialogComponent, {
    height: '200px',
    //width: '600px',
  });

  dialogRef.afterClosed().subscribe((x)=>{

    if(x) {
      this.MS.DeleteMemberByID(memberId).subscribe(()=>{
        this.fetchDataSource();      
      })
    }

  })
  // Assuming you want to confirm before deletion
  
  //const index = this.dataSource.findIndex((element) => element.id === memberId);
   
  
}
/*
fetch(): void {
  this.MS.getAllMembers().subscribe((member) => {
    this.dataSource.data = member;
  });
}
*/
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;

  this.dataSource.filter = filterValue.trim().toLowerCase();
}

}



