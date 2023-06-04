import { Component, EventEmitter, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-count-personas',
  templateUrl: './count-personas.component.html',
  styleUrls: ['./count-personas.component.css']
})
export class CountPersonasComponent implements OnInit{
  @Input() todos: number;
  @Input() aprobados: number;
  @Input() reprobados: number;
  @Output() countRadioButtonChange = new EventEmitter<string>();

  radioButtonSeleccionado = 'Todos';
  constructor() { 
    this.todos = 0;
    this.aprobados = 0;
    this.reprobados = 0;
  }

  ngOnInit(): void {
  }

  radioChange(): void {
    this.countRadioButtonChange.emit(this.radioButtonSeleccionado);
  }

}