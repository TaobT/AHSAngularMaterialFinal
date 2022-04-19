import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  openDialog(){
    const dialogRef = this.dialog.open(DialogAddMenu, {
      width: '250px'});
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}


@Component({
  selector: 'dialog-add-menu',
  templateUrl: './add-menu-dialog.component.html',
  styleUrls: ['./navbar.component.css']
})
export class DialogAddMenu implements OnInit {

  ngOnInit(): void {
  }

  constructor(public dialogRef: MatDialogRef<DialogAddMenu>, private router: Router) {}

  onLugarClick(): void {
    this.dialogRef.close();
    this.router.navigate(['/lugar']);
  }

  onDatoEntradaClick(): void {
    this.dialogRef.close();
    this.router.navigate(['/datoEntrada']);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
