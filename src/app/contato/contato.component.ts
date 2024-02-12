import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule,NgxMaskDirective, NgxMaskPipe],
  providers:[provideNgxMask()],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

  fromContato = this.fb.group({
    nome : ["",[
      Validators.minLength(4),
      Validators.required
    ]],
    assunto: ["",[
      Validators.minLength(4),
      Validators.required
    ]],
    telefone : ["",[
      Validators.minLength(11),
      Validators.required
    ]],
    email : ["",[
      Validators.email,
      Validators.required
    ]],
    messagem:["",[
      Validators.minLength(10),
      Validators.required
    ]]
  })



  constructor(
    private fb :FormBuilder
  ){}

  enviarForm(){
    alert("Formulario Enviado!")
    this.fromContato.reset();
  }
}
