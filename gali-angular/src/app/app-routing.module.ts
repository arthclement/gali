import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import  add agenda component
import { AgendaComponent } from './agenda/agenda.component';
// import add aboutUs component
import { CardexComponent } from './cardex/cardex.component';  

const routes: Routes = [

    // place for the paths; object {}
    {
        path: '',
        component: AgendaComponent

    },
    {
        path: 'cardex',
        component: CardexComponent

    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
