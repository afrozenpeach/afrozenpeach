import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faFacebookSquare, faWordpress, faTumblr, faGithub, faDiscord, faPatreon } from '@fortawesome/free-brands-svg-icons'
import { Blogs, Blog } from '../personal.types';

@Component({
  selector: 'app-blog-container',
  templateUrl: './blog-container.component.html',
  styleUrls: ['./blog-container.component.scss']
})
export class BlogContainerComponent implements OnInit {

  faEnvelope = faEnvelope;
  faTwitter = faTwitter;
  faFacebook = faFacebookSquare;
  faWordpress = faWordpress;
  faTumblr = faTumblr;
  faDiscord = faDiscord;
  faPatreon = faPatreon;
  faGithub = faGithub;

  blogs: Blog[] = Blogs;

  constructor() { }

  ngOnInit() {
  }

}
