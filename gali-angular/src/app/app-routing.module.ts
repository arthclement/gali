import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import all the existed components
import { FormComponent } from './form/form.component';
// import { AppointmentComponent } from './appointment/appointment.component';  


const routes: Routes = [
    /*{
        path: '',
        component: AppointmentComponent
    },*/
    {
        path: '/form',
        component: FormComponent
    },
    // place for the paths; object {}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
