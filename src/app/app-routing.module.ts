import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'recipes', pathMatch: 'full' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
    {
        path: 'places',
        loadChildren: './places/places.module#PlacesPageModule',
        canLoad: [AuthGuard],
    },
    {
        path: 'bookings',
        loadChildren: './bookings/bookings.module#BookingsPageModule',
        canLoad: [AuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
