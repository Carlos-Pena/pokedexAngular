import { Component, OnInit } from '@angular/core';
import { PokeApiService } from './poke-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  i = 0
  title = 'Pokedex';
  pokemonListData:any = []
  selectedPokemon:any = {}
  
  constructor(private pokeApiService : PokeApiService){
    this.cargarListaPokemon()
  }

  ngOnInit() {
            
  }
  
  setPokemon(id:number){    
    this.selectedPokemon = this.pokemonListData[id-1]
  }

  ngDoCheck(){
    
    if(this.pokemonListData.length==24){      
      this.pokemonListData.sort(function (a:any, b:any) {
        return a.id - b.id
    } ) ; 
    } 
  }

  ngAfterViewInit(): void {
   
    
  }
      
  

  cargarListaPokemon(){
    for (let i = 1; i <=24; i++) {
      this.pokeApiService.getPokemonData(i).subscribe(pokemon => {       
        this.pokemonListData.push(pokemon) 
      })
    }  
  }
}