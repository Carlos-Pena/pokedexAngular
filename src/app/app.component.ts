import { Component } from '@angular/core';
import { PokeApiService } from './poke-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokedex';
  public pokemonListData =new Array
  pokemonSelecte:number = 0; //default 0
  constructor(private pokeApiService : PokeApiService){
  }

  ngOnInit() {
    this.cargarListaPokemon()    
  }

  ordenar(){
    
    this.pokemonListData.sort(function (a, b) {
      return a.id - b.id
  });
  }
  cargarListaPokemon(){
    for (let i = 1; i <=20; i++) {
      this.pokeApiService.getPokemonData(i).subscribe(pokemon => {       
        this.pokemonListData.push(pokemon) 
      })
    }  
  }
}