import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SolicitarPagoPageRoutingModule } from './solicitarPago-routing.module';
import { SolicitarPagoPage } from './solicitarPago.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SolicitarPagoPageRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [SolicitarPagoPage]
})
export class SolicitarPagoPageModule {}
