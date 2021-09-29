import { LivroService } from 'src/app/services/livro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from 'src/app/models/livro';

@Component({
  selector: 'app-cadastrar-livro',
  templateUrl: './cadastrar-livro.component.html',
  styleUrls: ['./cadastrar-livro.component.css']
})
export class CadastrarLivroComponent implements OnInit {

  constructor(private router: Router, private service: LivroService) { }

  nome!:string;
  genero!: string;
  ano!: number;

  ngOnInit(): void {}

  cadastrar(): void
  {
    let livro: Livro ={
      nome: this.nome,
      genero: this.genero,
      ano: this.ano
    }
    this.service.create(livro).subscribe(livro =>{
      console.log(livro);
      this.router.navigate(["livro/listar"]);
    })
    
  }

}
