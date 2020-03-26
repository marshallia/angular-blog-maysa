import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import {Article} from '../model/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articleList: Article[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPostList().subscribe( data => this.articleList = data);
  }

}
