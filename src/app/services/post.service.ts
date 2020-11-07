import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  listarTodosPost() {
    return this.http.get(environment.lista_posts);
  }

  listarUno(id) {
    return this.http.get(`${environment.lista_un_post}${id}`);
  }

  crearPost(data) {
    return this.http.post(`${environment.guardar_post}`, data);
  }

  actualizar(data, id) {
    return this.http.put(`${environment.actualizar}${id}`, data);
  }

  eliminar(id) {
    return this.http.delete(`${environment.eliminar}${id}`);
  }


}



