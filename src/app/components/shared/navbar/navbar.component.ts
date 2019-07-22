import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _heroesService : HeroesService) { }

  ngOnInit() {
  }

  buscarHeroe( termino: string, event = null) {
    console.log(event);
    
    console.log(this._heroesService.buscarHeroe(termino));
    return false;
  }

}
