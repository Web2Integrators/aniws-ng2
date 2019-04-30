import { Component, Input, Output, EventEmitter } from '@angular/core';
import { range, BehaviorSubject, Subject, Observable, from, of  } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  @Input() columns = 4;
  @Input() images;
  @Output('select')
  selectEmitter = new EventEmitter();

  ngOnInit() {
    this.images = this.prepareImages(this.images);
  }

  prepareImages(images) {
    const splitImages = [];
    for (let i = 0, col = 0; i < images.length; i++) {
      const image = images[i];
      const colImages = splitImages[col] = splitImages[col] || [];
      colImages.push(image);
      col = i % this.columns;
    }
    return splitImages;
  }

  select(id: string) {
    this.selectEmitter.next(id);
  }
}
