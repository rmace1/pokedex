import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  pokeName: string = "pikachu";

  constructor(private httpCli: HttpClient) { }

  getOnePokemon(){
    return this.httpCli.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${this.pokeName}`);
  }

  getAllPokemon(){
    return this.httpCli.get<any>(`https://pokeapi.co/api/v2/pokemon?limit=3125`);
  }



}
