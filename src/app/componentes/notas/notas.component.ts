import { Component, OnInit } from '@angular/core';
import{ FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import{debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  form: FormGroup;
 
  arregloT:Array<string>=[];
  titulo: string;

  arregloD:Array<string>=[];
  Des: string;
  
 
  constructor(
    private formBuilder:FormBuilder
  ){
    this.buildFrom();
  }
  ngOnInit(): void {
  }
  private buildFrom(){
    this.form = this.formBuilder.group({
      NombreNota: ['',  [Validators.required]],
      DescripcionNota: ['',  [Validators.required]]
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
    this.arregloT.push(this.titulo);
    this.titulo="";
   localStorage.setItem('arregloT',JSON.stringify (this.arregloT));

   this.arregloD.push(this.Des);
   this.Des="";
  localStorage.setItem('arregloD',JSON.stringify (this.arregloD));


  }

  mostrarArreglo(){
    this.arregloT=JSON.parse(localStorage.getItem('arregloT')); 
    this.arregloD=JSON.parse(localStorage.getItem('arregloD')); 
  }


  onButtonEliminar(){
    localStorage.removeItem('arregloT')
    localStorage.removeItem('arregloD')
    this.arregloT=[];
    this.arregloD=[];
  }

}
