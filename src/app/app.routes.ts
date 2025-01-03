import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register/register.component').then((m) => m.RegisterComponent),
    title: 'Register',
  },
  {
    path: 'forgot-pass',
    loadComponent: () =>
      import('./forgot-pass/forgot-pass.component').then(
        (m) => m.ForgotPassComponent
      ),
    title: 'Forgot Password',
  },
];
