import { Routes } from '@angular/router';
import { App } from '../AppComponent/app';
import { SingleSlotProjection } from '../single-slot-projection/single-slot-projection';
import { LoginComponent } from '../login/login';

import path from 'path';

export const routes: Routes = [
  { path: '', component: App },

  { path: 'app', component: App },
  { path: 'single', component: SingleSlotProjection },
  { path: 'login', component: LoginComponent },
];
