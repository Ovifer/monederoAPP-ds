import { Component, OnInit } from '@angular/core';
import { TarjetaService} from "../../servicios/tarjeta/tarjeta.service";
import { CuentaService} from "../../servicios/cuenta/cuenta.service";
import { Router } from "@angular/router";
import { Tarjeta } from "../../models/tarjeta.model";
import { Cuenta } from "../../models/cuenta.model";

@Component({
    selector: 'app-billetera',
    templateUrl: './billetera.page.html',
    styleUrls: ['./billetera.page.scss'],
})
export class BilleteraPage implements OnInit {

    cuentas: Cuenta[] = [];
    tarjetas: Tarjeta[]= [];

    //[routerLink]="['/payment-order', order.id]"

    constructor(private tarjetaService: TarjetaService,
                private cuentaService: CuentaService,
                private router: Router) { }

    ngOnInit() {

        this.tarjetaService.obtenerTarjetas().subscribe(
            (data: any) =>{
                this.tarjetas = data;
            }
        );
        this.cuentaService.obtenerCuentas().subscribe(
            (data: any) =>{
                this.cuentas = data;
                console.log(data);
            }
        );
    }

}
