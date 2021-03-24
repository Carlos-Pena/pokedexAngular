import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.css']
})
export class PokemonViewComponent implements OnInit {
  @Input('entrada') pokemon:any
  constructor() {
   
   }

   ngOnChanges(){
     //console.log("ngOnChange")
     
   }

  ngOnInit(): void {
    //console.log("ngOnInit")
  }

  ngDoCheck(){
    //console.log("ngDoCheck")
  }

  

}
