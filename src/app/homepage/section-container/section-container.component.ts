import { Component, OnInit } from '@angular/core';
import { Section, Sections } from '../homepage.types';

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss']
})
export class SectionContainerComponent implements OnInit {

  sections: Section[] = Sections;

  constructor() { }

  ngOnInit() {
  }

}
