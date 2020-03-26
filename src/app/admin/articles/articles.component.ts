import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {Article} from '../../model/article';
import {Router} from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articleList: Article[] = [];

  constructor(private postService: PostService, private route: Router) { }

  ngOnInit(): void {
    console.log( this.postService.getPostList()
        .subscribe( data => {
          this.articleList = data;
        }));
  }

  delete(i: number) {
    const id = i.toString();
    this.postService.deletePost(id).subscribe(data => {
      console.log(data);
    });
    this.route.navigate(['/admin/articles']);
  }

}
