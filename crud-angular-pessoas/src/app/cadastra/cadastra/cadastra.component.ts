import { Pessoa } from './../../model/pessoa.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastra',
  templateUrl: './cadastra.component.html',
  styleUrls: ['./cadastra.component.scss']
})
export class CadastraComponent implements OnInit {


  constructor(private http:HttpClient) { }


  //savePessoa(p: Pessoa ): Observable<Pessoa>{

   // this.http.post<Pessoa>()

  //}

  ngOnInit(): void {
  }

}
