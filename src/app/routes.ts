import {HomePageComponent} from './home-page/home-page.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';

export const ROUTES = [
  {path:'', component: HomePageComponent, data: { animation: 'home' } },
  {path:'profile/:id', component: ProfilePageComponent, data: {animation: 'profile'} },
]