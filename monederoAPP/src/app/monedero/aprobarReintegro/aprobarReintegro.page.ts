import { Component, OnInit } from '@angular/core';
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";
import { ToastController, LoadingController } from '@ionic/angular';
import { Reintegro } from "../../models/reintegro.model";
import { ReintegroService } from 'src/app/servicios/reintegro/reintegro.service';
import { TarjetaService } from 'src/app/servicios/tarjeta/tarjeta.service';

@Component({
    selector: 'app-aprobar-reintegro',
    templateUrl: './aprobar-reintegro.page.html',
    styleUrls: ['./aprobar-reintegro.page.scss'],
})
export class AprobarReintegroPage implements OnInit {


    reintegrosActivos: Reintegro[] = [];

    reintegrosCancelados: Reintegro[] = [];

    reintegrosExitosos: Reintegro[] = [];

    constructor(private router: Router,
                public toastController : ToastController,
                private loadingController: LoadingController,
                private alertController: AlertController,
                private reintegroService: ReintegroService,
                private tarjetaService: TarjetaService) { }

    ngOnInit() {

        this.reintegroService.reintegrosActivos().subscribe(
            (data: any) =>{
                this.reintegrosActivos = data;
            }
        );

        this.reintegroService.reintegrosCancelados().subscribe(
            (data: any) =>{
                this.reintegrosCancelados = data;
            }
        );

        this.reintegroService.reintegrosExitosos().subscribe(
            (data: any) =>{
                this.reintegrosExitosos = data;
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


    async onClick(IdReintegro){

        const alert = await this.alertController.create({
            header: 'Cancelar',
            message: '¿Desea  rechazar este reintegro?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'secondary',
                },
                {
                    text: 'Aceptar',
                    handler: () => {

                        this.reintegroService.cancelarReintegro(IdReintegro)
                            .subscribe(
                                (data: any) =>
                                {

                                    this.successToast('success', 'Reintegro rechazado satisfactoriamente')
                                    console.log(data);
                                    this.router.navigate(['/post']);
                                },
                                err =>{
                                    console.log(err);

                                    this.presentToast('danger', 'Ha ocurrido un error al rechazar el reintegro');
                                }
                            );
                    }
                }
            ]
        });
        await alert.present();
    }

    async pagoMonedero(reintegroactivo){
        this.tarjetaService.crearReintegro(reintegroactivo);
        const alert = await this.alertController.create({
            header: 'Cancelar',
            message: '¿Desea realizar el reintegro con el monedero?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'secondary',
                },
                {
                    text: 'Aceptar',
                    handler: () => {

                        this.tarjetaService.monederoReintegro()
                            .subscribe(
                                (data: any) =>
                                {
                                    this.successToast('success', 'Reintegro procesado satisfactoriamente')
                                    this.router.navigate(['/post']);
                                },
                                err =>{
                                    console.log(err);

                                    this.presentToast('danger', 'Ha ocurrido un error al realizar el reintegro');
                                }
                            );
                    }
                }
            ]
        });
        await alert.present();
    }

    pagoTarjeta(reintegroactivo){
        this.tarjetaService.crearReintegro(reintegroactivo);
        this.router.navigate(['/post/tarjeta-reintegro'])
    }

    pagoCuenta(reintegroactivo){
        this.tarjetaService.crearReintegro(reintegroactivo);
        this.router.navigate(['/post/cuenta-reintegro'])
    }

}
