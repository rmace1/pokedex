import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {

  @Input()
  pokeName: string = "";

  pokeResponse: any;
  pokeList: Array<any> = [];
  tempList: Array<any> = [];

  alphabeticalSort: boolean = false;

  constructor(private pokeServ: PokeService, private router: Router) { }

  ngOnInit(): void {
    this.pokeServ.getAllPokemon().subscribe(list => {
      this.pokeList = list.results;
      this.pokeList.forEach(pokemon => {
        this.tempList.push(pokemon);
      })
    })
  }

  ngOnChanges(){
    if(!this.alphabeticalSort){
      this.tempList = this.pokeList.filter((pokemon: any) => pokemon.name.includes(this.pokeName));
    }else{
      this.tempList = this.pokeList.filter((pokemon: any) => pokemon.name.includes(this.pokeName));
      this.tempList.sort((a:any, b:any) => a.name < b.name ? -1 : 1);
    }
  }

  toggleSort(){
    this.alphabeticalSort = !this.alphabeticalSort;
    this.ngOnChanges();
  }

  goToDetails(e: any){

    this.pokeServ.pokeName= e.target.innerText.toLowerCase();
    this.router.navigate(['/pokedetails']);
  }
}
