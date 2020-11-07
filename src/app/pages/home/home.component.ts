import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any = [];

  /*data: any = {
    userId: 1,
    id: 1,
    title: "<h1>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h1>",
    body: "<p>quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto</p>"
  }; */

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.listarTodosPost().subscribe((resp: any) => {
      this.data = resp;
    });
  }

}
