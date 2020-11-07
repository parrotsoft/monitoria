import { Router } from '@angular/router';
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

  constructor(private fb: FormBuilder, private postService: PostService,
    private router: Router) {

    this.formulario = this.fb.group({
      'title': ['', [Validators.required]],
      'body': ['', [Validators.required]],
      'userId': ['1']
    });

  }

  ngOnInit() {
  }

  onGuardar() {
    this.postService.crearPost(this.formulario.value).subscribe((resp: any) => {
      this.router.navigate(['/pages/home']);
    });
  }

}
