import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './routes';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ImagesService } from './images.service';

@NgModule({
  imports:      [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [ AppComponent, GalleryComponent, ProfilePageComponent, HomePageComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ImagesService]
})
export class AppModule { }
