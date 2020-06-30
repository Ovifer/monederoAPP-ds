import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarjetaReintegroPage } from './tarjetaReintegro.page';

const routes: Routes = [
    {
        path: '',
        component: TarjetaReintegroPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TarjetaReintegroPageRoutingModule {}
