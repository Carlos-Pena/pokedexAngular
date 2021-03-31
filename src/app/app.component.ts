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
  pokemonListData: any = []
  selectedPokemon: any = {}

  constructor(private pokeApiService: PokeApiService) {
    this.cargarListaPokemon()
  }

  ngOnInit() {

  }

  setPokemon(id: number) {
    this.selectedPokemon = this.pokemonListData[id - 1]
  }


  async cargarListaPokemon() {
    for (let i = 1; i <= 24; i++) {
      let pokemon = await this.pokeApiService.getPokemon(i)
      this.pokemonListData.push(pokemon)
      if (i == 1) {
        this.selectedPokemon = this.pokemonListData[i - 1]
      }
    }
  }
}