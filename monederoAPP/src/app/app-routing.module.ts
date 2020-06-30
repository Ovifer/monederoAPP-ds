import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'monedero',
    loadChildren: () => import('./monedero/monedero.module').then( m => m.PostPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'solicitar-pago',
    loadChildren: () => import('./monedero/solicitarPago/solicitarPago.module').then( m => m.SolicitarPagoPageModule)
  },
  {
    path: 'aprobar-reintegro',
    loadChildren: () => import('./monedero/aprobarReintegro/aprobarReintegro.module').then( m => m.AprobarReintegroPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./monedero/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'billetera',
    loadChildren: () => import('./monedero/billetera/billetera.module').then( m => m.BilleteraPageModule)
  },
  {
    path: 'cobros',
    loadChildren: () => import('./monedero/cobros/cobros.module').then( m => m.CobrosPageModule)
  },
  {
    path: 'tarjeta-reintegro',
    loadChildren: () => import('./monedero/tarjetaReintegro/tarjetaReintegro.module').then( m => m.TarjetaReintegroPageModule)
  },
  {
    path: 'cuenta-reintegro',
    loadChildren: () => import('./monedero/cuentaReintegro/cuentaReintegro.module').then( m => m.CuentaReintegroPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
