import { Component, OnInit } from '@angular/core';
import { TarjetaService } from 'src/app/servicios/tarjeta/tarjeta.service';
import { Tarjeta } from 'src/app/models/tarjeta.model';
import { Reintegro } from 'src/app/models/reintegro.model';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tarjetaReintegro',
    templateUrl: './tarjetaReintegro.page.html',
    styleUrls: ['./tarjetaReintegro.page.scss'],
})
export class TarjetaReintegroPage implements OnInit {

    tarjetas: Tarjeta[] = [];
    reintegro: Reintegro;

    constructor(private tarjetaService: TarjetaService,
                public toastController : ToastController,
                private loadingController: LoadingController,
                private router: Router) { }

    ngOnInit() {
        this.tarjetaService.obtenerTarjetas().subscribe(
            (data: any) => {
                this.tarjetas = data;
            }
        );

        this.reintegro = this.tarjetaService.reintegro;
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
        this.tarjetaService.tarjetaReintegro().subscribe(
            (res:any) => {
                this.loadingController.dismiss();
                console.log(res);
                this.successToast('success', 'Reintegro procesado satisfactoriamente')

                this.router.navigateByUrl('/monedero/aprobar-reintegro');
            },
            err => {
                this.loadingController.dismiss();
                console.log(err);
                this.presentToast('danger', 'Ha ocurrido un error al realizar el reintegro');
                this.router.navigateByUrl('/monedero');
            }
        );
    }

}
