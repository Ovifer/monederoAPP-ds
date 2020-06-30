import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TarjetaReintegroPageRoutingModule } from './tarjetaReintegro-routing.module';
import { TarjetaReintegroPage } from './tarjetaReintegro.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TarjetaReintegroPageRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [TarjetaReintegroPage]
})
export class TarjetaReintegroPageModule {}
