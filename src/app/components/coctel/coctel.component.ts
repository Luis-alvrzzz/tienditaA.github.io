import { Component, Input } from '@angular/core';
import { Coctel } from './../../models/coctel.model';

@Component({
  selector: 'app-coctel',
  templateUrl: './coctel.component.html',
  styleUrls: ['./coctel.component.css']
})
export class CoctelComponent {

  @Input() coctel!: Coctel;

}
