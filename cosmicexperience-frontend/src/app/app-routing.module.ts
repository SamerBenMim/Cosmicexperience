import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { EventComponent } from './upcoming-events/event/event.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent    },
  {
    path: 'register',
    component: RegisterComponent,
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
  { path: 'events', component: EventComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




