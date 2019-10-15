import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../homepage.types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() section: Section | undefined;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect(url: string) {
    if (url.startsWith("http")) {
      this.router.navigate(['/externalRedirect', { externalUrl: url }], {
        skipLocationChange: true,
      });
    } else {
      this.router.navigate([url]);
    }
    
    event.preventDefault();
  }
}
