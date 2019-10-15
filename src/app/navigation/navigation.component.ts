import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faFacebookSquare, faWordpress, faTumblr } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  faTwitter = faTwitter;
  faFacebook = faFacebookSquare;
  faEnvelope = faEnvelope;
  faWordpress = faWordpress;
  faTumblr = faTumblr;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
