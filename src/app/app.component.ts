import { Component, ViewChild, ElementRef } from '@angular/core';
import { Persona } from './persona.model';
import { LogginService } from './LogginService.service';

//Se agrega en providers logginService
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogginService]
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [new Persona("Juan","Perez"), new Persona("Laura","Juarez")];
  //nombreInput:string;
  //apellidoInput:string;

  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  //Agregamos en el constructor el logginService
  constructor(private logginService: LogginService){}
  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    this.logginService.enviaMensajeAConsola(" Enviamos persona: " + persona1.nombre + " apellido: " + persona1.apellido);
    this.personas.push(persona1);
  }
}
