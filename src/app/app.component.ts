import { Component } from '@angular/core';
import { from, BehaviorSubject, merge, interval, timer, Observable } from 'rxjs';
import { switchMap, switchMapTo, takeUntil, tap, finalize, takeWhile, map, delay } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { trigger, state, transition, animate, style, query, group, animateChild} from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition('home <=> profile', [
        style({ position: 'relative' }),
        query(':enter', [
          style({position:'absolute', opacity:0, top:'-100%' })
        ]),
        query(':leave', [
          style({ position: 'absolute', top:0 }),
          animateChild(),
          style({ opacity:0 }),
        ]),
        query(':enter', [
          style({opacity:1, top:'0%'}),
          animateChild()
        ]),
      ]) 
    ])
  ]
})
export class AppComponent {
  prepareRouteState(outlet: RouterOutlet) {
    console.log(outlet && outlet.activatedRouteData && outlet.activatedRouteData)
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  scrollToTop() {
    window.scrollTo(0,0);
  }
}
