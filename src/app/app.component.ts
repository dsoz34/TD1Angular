import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TD1';

  nom:String="Jean"
  verif:boolean=true
  element:number=1

  etudiants:any[]=[
    {"nom":"Dupont", "prenom":"Jean",    "age":25},
    {"nom":"lalu",   "prenom":"lolo",    "age":12},
    {"nom":"gngn",   "prenom":"trtr",    "age":112},
    {"nom":"nom",   "prenom":"prenom",    "age":17},
    {"nom":"berran", "prenom":"bernard", "age":85}
  ]


  getNomClass(premier:boolean, dernier:boolean, pair:boolean){
    var nomClass="";
    if(premier || dernier){
      nomClass+= "gras";
    }
    if(pair){
      nomClass+= " bleu"
    } else {
      nomClass+= " rouge"
    }


    return nomClass;
    
  }



}
