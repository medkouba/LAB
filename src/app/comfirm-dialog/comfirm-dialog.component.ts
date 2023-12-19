import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comfirm-dialog',
  templateUrl: './comfirm-dialog.component.html',
  styleUrls: ['./comfirm-dialog.component.css']
})
export class ComfirmDialogComponent {
public title="Are You Sure?" ;
public content="Do you really want to remove this item?";
public confirmedButton="confirm";
public cancelButton="cancel";

//forcage de type => boite de dialog 

constructor(public dialogRef: MatDialogRef<ComfirmDialogComponent>) {

 }

}
