import { Component, OnInit } from '@angular/core';
import { CobroActivo } from "../../models/cobroActivo.model";
import { CobroService} from "../../servicios/cobro/cobro.service";
import { AlertController } from "@ionic/angular";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-cobros',
    templateUrl: './cobros.page.html',
    styleUrls: ['./cobros.page.scss'],
})
export class CobrosPage implements OnInit {

    cobrosActivos: CobroActivo[] = [];

    cobrosCancelados: CobroActivo[] = [];

    cobrosExitosos: CobroActivo[] = [];

    constructor(private cobroservice: CobroService,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                public toastController : ToastController,
                private loadingController: LoadingController,
                private alertController: AlertController) { }

    ngOnInit() {
        this.cobroservice.cobrosActivos().subscribe(
            (data: any) =>{
                this.cobrosActivos = data;
            }
        );

        this.cobroservice.cobrosCancelados().subscribe(
            (data: any) =>{
                this.cobrosCancelados = data;
            }
        );

        this.cobroservice.cobrosExitosos().subscribe(
            (data: any) =>{
                this.cobrosExitosos = data;
            }
        );
    }

    ionViewWillEnter(){
        this.cobroservice.cobrosActivos().subscribe(
            (data: any) =>{
                this.cobrosActivos = data;
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


    async onClick(idPago){

        const alert = await this.alertController.create({
            header: 'Cancelar',
            message: '¿Desea cancelar este cobro?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'secondary',
                },
                {
                    text: 'Aceptar',
                    handler: () => {

                        this.cobroservice.cancelarCobro(idPago)
                            .subscribe(
                                (data: any) =>
                                {

                                    this.successToast('success', 'Cobro cancelado satisfactoriamente')
                                    console.log(data);
                                    this.router.navigate(['/monedero']);
                                },
                                err =>{
                                    console.log(err);

                                    this.presentToast('danger', 'Ha ocurrido un error al cancelar el cobro');
                                }
                            );
                    }
                }
            ]
        });
        await alert.present();
    }
}
