import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public state$: Observable<{ [key: string]: string }>;
  title = 'Competitions';
  constructor(private router: Router) {}

  ngOnInit() {
    this.state$ = this.router.events.pipe(
      filter(e => e instanceof NavigationStart),
      map(() => this.router.getCurrentNavigation().extras.state)
    );
  }
}
