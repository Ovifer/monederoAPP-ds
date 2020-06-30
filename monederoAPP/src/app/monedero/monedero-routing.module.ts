import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonederoPage } from './monedero.page';

const routes: Routes = [
  {
    path: '',
    component: MonederoPage
  },
  {
    path: 'aprobar-reintegro',
    loadChildren: () => import('./aprobarReintegro/aprobarReintegro.module').then( m => m.AprobarReintegroPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'solicitar-pago',
    loadChildren: () => import('./solicitarPago/solicitarPago.module').then( m => m.SolicitarPagoPageModule)
  },
  {
    path: 'billetera',
    loadChildren: () => import('./billetera/billetera.module').then( m => m.BilleteraPageModule)
  },
  {
    path: 'cobros',
    loadChildren: () => import('./cobros/cobros.module').then( m => m.CobrosPageModule)
  },  {
    path: 'tarjeta-reintegro',
    loadChildren: () => import('./tarjetaReintegro/tarjetaReintegro.module').then( m => m.TarjetaReintegroPageModule)
  },
  {
    path: 'cuenta-reintegro',
    loadChildren: () => import('./cuentaReintegro/cuentaReintegro.module').then( m => m.CuentaReintegroPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonederoPageRoutingModule {}
