import { Component, OnInit } from '@angular/core';
import { Reintegro } from 'src/app/models/reintegro.model';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Cuenta } from 'src/app/models/cuenta.model';
import { CuentaService } from 'src/app/servicios/cuenta/cuenta.service';
import { TarjetaService } from 'src/app/servicios/tarjeta/tarjeta.service';

@Component({
    selector: 'app-cuentaReintegro',
    templateUrl: './cuentaReintegro.page.html',
    styleUrls: ['./cuentaReintegro.page.scss'],
})
export class CuentaReintegroPage implements OnInit {

    reintegro: Reintegro;

    cuentas: Cuenta[] = [];

    constructor(private cuentaService: CuentaService,
                private tarjetaService: TarjetaService,
                public toastController : ToastController,
                private loadingController: LoadingController,
                private router: Router) { }

    ngOnInit() {
        this.cuentaService.obtenerCuentas().subscribe(
            (data: any) =>{
                this.cuentas = data;
            }
        );
    }

    async presentToast(color : string, mensaje : string) {
        const toast = await this.toastController.create({
            message: mensaje,
            color : color,
            buttons: [
                {
                    icon: 'close',
                    role: 'cancel'
                }
            ]
        });
        toast.present();
    }

    async successToast(color : string, mensaje : string) {
        const success = await this.toastController.create({
            message: mensaje,
            color : color,
            buttons: [
                {
                    icon: 'close',
                    role: 'cancel'
                }
            ]
        });
        success.present();
    }


    async presentLoading() {
        const loading = await this.loadingController.create({
            spinner: "bubbles",
            duration: 100000,
            message: 'Cargando ...',
            translucent: true,
            cssClass: 'custom-class custom-loading',
        });
        loading.present();
    }

    async onSubmit(){
        await this.presentLoading();
        this.tarjetaService.cuentaReintegro().subscribe(
            (res:any) => {
                this.loadingController.dismiss();
                console.log(res);
                this.successToast('success', 'Reintegro procesado satisfactoriamente')

                this.router.navigateByUrl('/post/aprobar-reintegro');
            },
            err => {
                this.loadingController.dismiss();
                console.log(err);
                this.presentToast('danger', 'Ha ocurrido un error al realizar el reintegro');
                this.router.navigateByUrl('/post');
            }
        );
    }

}
