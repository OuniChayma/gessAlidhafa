import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { UploadService } from '../services/upload.service';
import { PompisteService } from '../services/pompiste.service';
import { Pompiste } from '../model/pompiste';  
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pompiste',
  imports: [NavBarComponent , FormsModule , NgFor],
  templateUrl: './pompiste.component.html',
  styleUrls: ['./pompiste.component.css']
})
export class PompisteComponent {
  succesMessage ?: string // message succes
  errorMessage ?: string // message error
  pompistes :any[] = [];
  
  print(){//print the table
    window.print();
  }

   
 

  //debut get all pompiste
  getAllpompistes(){
    this.pompisteService.getAllPompiste().subscribe({
      next : (data)=>{
        this.pompistes=data;
      }
    })
  }
  //fin get all pompiste
  

  constructor(
    private uploadService: UploadService,
    private pompisteService: PompisteService,
    private router :Router
  ) {
    this.getAllpompistes();
  }

  
  //bebut add pompiste
  selectedFile: File | null = null;
  pompisteData: Pompiste = {}; 

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile) {
      const token = localStorage.getItem("token");
      if (token) {
        this.uploadService.uploadFile(this.selectedFile, token).subscribe({
          next : (response: any) => {
            this.succesMessage = "تم اضافة بنجاح"
            this.savePompiste();
          },
          error :(error) => {
            this.errorMessage = "رجاء اعادة المحولة"
          }
        }
        );
      } else {
        this.router.navigate(["/login"]);
      }
    } else {
      this.errorMessage = "رجاء اعادة المحولة"
    }
  }

  savePompiste() {
    this.pompisteService.addPompiste(this.pompisteData).subscribe({
      next : (response) => {
        this.succesMessage = "تم اضافة بنجاح"
        this.getAllpompistes();
      },
      error : (error) => {
        this.errorMessage = "رجاء اعادة المحولة"
      }
    }
    );
  }
  //fin add pompiste

  //debut delete pompistre
  DeletePompiste(idPmpiste : string){
    this.pompisteService.deletePompiste(idPmpiste).subscribe({
      next : (data)=>{
        this.succesMessage = "تم المحو بنجاح"
        this.getAllpompistes();
      },
      error :(error) => {
        console.log(error)
        this.errorMessage = "رجاء اعادة المحولة"
      }
    })
  }
  //fin detete pompiste

  //debut modifier pompiste
    modifPomdite : Pompiste = {};
    oppenmodal(idpompiste : string){
      this.pompisteService.getOnePompiste(idpompiste).subscribe({
        next : (data)=>{
          this.modifPomdite=data;
          console.log(data)
        }
      })
      
    }
  //fi modifier pompiste
}
