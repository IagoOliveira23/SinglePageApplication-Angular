import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  
  protudos:string[] = []
  menuType:string = "superadmin"

  constructor(){
    this.protudos = [
      "mouse",
      "teclado",
      "cabo",
      "processador"
    ] 
  }

  ngOnInit(): void {}

  adicionar(){
    this.protudos.push("iago")  
  }

  remover(index:number){
    this.protudos.splice(index, 1)
  }
}