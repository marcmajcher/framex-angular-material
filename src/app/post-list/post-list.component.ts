import { Component, OnInit } from '@angular/core';
import { BlogDataService } from '../blog-data-service/blog-data.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  blogData;

  constructor(private BlogDataService: BlogDataService) { }

  getPosts () {
    this.blogData = this.BlogDataService.getPosts();
  }

  ngOnInit() {
    this.getPosts();
  }

}
