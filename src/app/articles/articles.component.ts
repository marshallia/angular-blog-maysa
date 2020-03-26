import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import {Article} from '../model/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  p = 1;
  filter: string;
  articleList: any[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  console.log( this.postService.getPostList()
      .subscribe( data => {
        this.articleList = data;
      }));
  }


}
