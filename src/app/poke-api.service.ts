import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  pokemonView: any = {}
  constructor(private http: HttpClient) { }

  getPokemonData(id:number):Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' +id)
  }

  async getPokemon(id:number) {
    return new Promise((resolve, reject)=>{
      this.getPokemonData(id).subscribe(pokemon=>resolve(pokemon))
    })
  }

}
