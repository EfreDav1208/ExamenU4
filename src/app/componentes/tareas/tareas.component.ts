import { Component, OnInit, EventEmitter} from '@angular/core';
import{ FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import{debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  form: FormGroup;
  public listaTarea:Array<string>=[];
  public listat:string="";
  
  
  constructor(
    private formBuilder:FormBuilder
  ){
    this.buildFrom();
  }
  ngOnInit(){ }
  private buildFrom(){
    this.form = this.formBuilder.group({
      NombreTarea: ['',  [Validators.required]]
    });
  }
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    }else{
      this.form.markAllAsTouched();
    }
  }

  guardarArreglo(){
    this.listaTarea.push(this.listat);
    this.listat="";
   localStorage.setItem('listaTarea',JSON.stringify (this.listaTarea));

  }

  mostrarArreglo(){
    this.listaTarea=JSON.parse(localStorage.getItem('listaTarea')); 
  }

  onButtonEliminar(){
    localStorage.removeItem('listaTarea')
    this.listaTarea=[];
  }
  
}
