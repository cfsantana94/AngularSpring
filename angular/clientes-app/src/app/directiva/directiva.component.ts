import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent {

  listaCurso: string[] = ['Ecuaciones Diferenciales','Algebra Lineal', 'Python', 'Matlab'];
  habilitar: boolean = true;
  constructor() { }

  setHabilitar(): void{
    this.habilitar = (this.habilitar == true)? false:true;
  }

}
