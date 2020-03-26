import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  id: number;
  title: string;
  body: string;
  constructor(private postService: PostService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.postService.getPost( id ).subscribe(data => {
        this.id = data.id;
        this.title = data.title;
        this.body = data.body;
      });
    }
  }

  addPost() {
    const data = {
      title : this.title,
      body : this.body,
      userId : 'Maysa'
    };

    this.postService.addPost(data).subscribe(data => {
      console.log('data added ')+ JSON.stringify(data);
    });
    this.route.navigate(['/admin/articles']);
  }

  update(){
    const id = this.id.toString();
    const data = {
      title : this.title,
      body : this.body,
      userId : 'Maysa'
    };
    this.postService.updatePost(data, id).subscribe(data => {
      console.log('data updated ')+ JSON.stringify(data);
    });
    this.route.navigate(['/admin/articles']);
  }
}
