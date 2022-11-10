import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faFacebookSquare, faWordpress, faTumblr, faGithub, faPatreon, faDiscord, faMastodon } from '@fortawesome/free-brands-svg-icons';
import { faDice, faCode, faHome } from '@fortawesome/free-solid-svg-icons';

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
  faGithub = faGithub;
  faUser = faUser;
  faDice = faDice;
  faCode = faCode;
  faHome = faHome;
  faPatreon = faPatreon;
  faDiscord = faDiscord;
  faMastodon = faMastodon;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
