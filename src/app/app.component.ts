import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coctel } from './models/coctel.model';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'pokeApi';
  http = inject(HttpClient);
  cocteles: Coctel[] = [];

  ngOnInit(){
    this.http.get<Coctel[]>('https://fakestoreapi.com/products')
    .subscribe ((data) => {
      this.cocteles = data;
      
      console.log(data);
    });

    
  }
}
