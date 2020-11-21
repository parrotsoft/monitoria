import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  formulario: FormGroup;
  id_post: string;

  constructor(private fb: FormBuilder, private postService: PostService,
    private router: Router, private activateRoute: ActivatedRoute) {

    this.formulario = this.fb.group({
      'title': ['', [Validators.required]],
      'body': ['', [Validators.required]],
      'userId': ['1']
    });

  }

  ngOnInit() {
    this.id_post = this.activateRoute.snapshot.paramMap.get('id');
    if (this.id_post) {
      this.postService.listarUno(this.id_post).subscribe((resp: any) => {
        this.formulario.patchValue({
          'title': resp.title,
          'body': resp.body,
          'userId': resp.userId
        });
      });
    }
  }

  onGuardar() {
    if (this.id_post) {
      this.postService.actualizar(this.formulario.value, this.id_post).subscribe((resp: any) => {
        this.router.navigate(['/pages/home']);
      });
    } else {
      this.postService.crearPost(this.formulario.value).subscribe((resp: any) => {
        this.router.navigate(['/pages/home']);
      });
    }
  }

}
