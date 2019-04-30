import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, switchMapTo, takeUntil, tap, finalize, takeWhile, map, delay } from 'rxjs/operators';
import {ImagesService} from '../images.service';
import {style, animate, trigger, transition, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('pageAnimation', [
      transition(':leave', [
        query('img', stagger(50, [
          animate('500ms cubic-bezier(.76,1.23,.93,.9)', style({ transform: 'translateY(200px)', opacity: 0}))
        ]))
      ]),
      transition(':enter', [
        query('img', [
          style({opacity:0, transform:'translateY(-200px)'}),
          stagger(50, [
            animate('500ms cubic-bezier(.76,1.23,.93,.9)', style({ transform: 'translateY(0px)', opacity: 1}))
          ])
        ])
      ]),
    ])
  ]
})
export class HomePageComponent {
  constructor(private _router: Router, private _images: ImagesService) {}

  @HostBinding('@pageAnimation')
  public animatePage = true;

  get images() {
    return this._images.images;
  }

  gotoImage(id) {
    this._router.navigate(['profile', id]);
  }
}