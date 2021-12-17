import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.css']
})
export class PokecardComponent implements OnInit {

  /* pokemon: Pokemon = {
    id: 25,
    name: 'Pikachu',
    sprites: {
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png'
    },
    abilities: [{
      ability: {
        name: "Lightning Rod"}},{
      ability: {name: "Sparkle"}
        }
    ]
  } */
  img: string = '';
  isDefault: boolean = true;
  pokemon: Pokemon = <Pokemon>{};

  constructor(private pokeService: PokeService) { }

  ngOnInit(): void {
    this.pokeService.getOnePokemon().subscribe(poke => {
      this.pokemon = poke;
      this.img = this.pokemon.sprites.front_default;
    })
  }

  toggleImage(){
    if(this.img === this.pokemon.sprites.front_default){
      this.img = this.pokemon.sprites.front_shiny;
    }else {
      this.img = this.pokemon.sprites.front_default;
    }
  }
}
