import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'patient', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: 'patient',
    loadChildren: () =>
      import('./patient/patient.routes').then((m) => m.patientRoutes),
  },
  {
    path: 'doctor',
    loadChildren: () =>
      import('./doctor/doctor.routes').then((m) => m.doctorRoutes),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.adminRoutes),
  },
];
