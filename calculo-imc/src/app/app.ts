import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Teste } from './teste/teste'

import {Imc} from './imc/imc';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Imc ,Teste],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('calculo-imc');
 
}