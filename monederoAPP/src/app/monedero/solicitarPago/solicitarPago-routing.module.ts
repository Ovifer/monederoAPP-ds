import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitarPagoPage } from './solicitarPago.page';

const routes: Routes = [
    {
        path: '',
        component: SolicitarPagoPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SolicitarPagoPageRoutingModule {}
