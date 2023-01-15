import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent    },
  {
    path: 'register',
    component: TestComponent,
  },
  { path: 'profile', component: TestComponent },
  {
    path: 'editProfile',
    component: TestComponent,

  },
  {
    path: 'createEvent',
    component: TestComponent,

  },
  { path: 'events', component: TestComponent },
  { path: '', component: TestComponent },
  { path: '**', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




