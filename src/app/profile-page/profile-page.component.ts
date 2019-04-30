import { Component, HostBinding } from '@angular/core';
import { ImagesService } from '../images.service';
import { Router, ActivatedRoute } from '@angular/router';
import {style, animate, trigger, transition, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  animations: [
    trigger('contentAnimation', [
      transition(':enter', [
        style({ height: '0px', transform: 'translateX(-50px)' }),
        animate('300ms ease-out', style({ height: '*', transform: 'translateX(0px)'}))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ height: '0px',  transform: 'translateX(50px)' }))
      ]),
    ]),
    trigger('pageAnimation', [
      transition(':enter', [
        query('img, .icon', stagger(100, [
          style({ transform: 'translateY(-200px)', opacity: 0}),
          animate('700ms ease-in', style({ transform: 'translateY(0px)', opacity: 1}))
        ]))
      ]),
      transition(':leave', [
        query('img, .content, .icon', stagger(500, [
          animate('700ms ease-in', style({ transform: 'translateY(200px)', opacity: 0}))
        ], {optional:true}))
      ])
    ])
  ]
})
export class ProfilePageComponent {
  public image: string;
  public showContent = false;

  @HostBinding('@pageAnimation')
  public animatePage = true;

  constructor(private _images: ImagesService, private _activedRoute: ActivatedRoute) {
    const idVal = this._activedRoute.snapshot.params['id'];
    if (!idVal) {
      throw new Error('...');
    }
    const id = parseInt(idVal);
    this.image = _images.images.find(i => i.id === id);
  }

  toggleContent() {
    this.showContent = !this.showContent;
  }
}