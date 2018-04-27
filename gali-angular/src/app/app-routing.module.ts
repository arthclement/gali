import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import all the existed components
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormComponent } from './form/form.component';
import { BodyComponent } from './body/body.component';
import { AgendaComponent } from './agenda/agenda.component';

const routes: Routes = [
    {
        path: 'sidebar',
        component: FormComponent
    },
    // place for the paths; object {}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
