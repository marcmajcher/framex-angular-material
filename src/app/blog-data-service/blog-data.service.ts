import { Injectable } from '@angular/core';
import { BlogData } from '../../assets/blogdata';

@Injectable({
  providedIn: 'root'
})

export class BlogDataService {

  constructor() {
  }

  getPosts() {
    return BlogData;
  }
}
