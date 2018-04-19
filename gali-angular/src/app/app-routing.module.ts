import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import  add home component
// import add aboutUs component

//add hammerJs = open source library for gesture support
import 'hammerjs';

const routes: Routes = [

    // place for the paths; object {}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
