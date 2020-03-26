import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {
  id: number;
  title: string;
  body: string;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.postService.getPost( id ).subscribe(data => {
      this.id = data.id;
      this.title = data.title;
      this.body = data.body;
    });
  }

}
