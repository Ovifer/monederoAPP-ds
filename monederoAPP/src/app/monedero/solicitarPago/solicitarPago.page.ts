import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { MenuController } from "@ionic/angular";
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { CobroService } from "../../servicios/cobro/cobro.service";
@Component({
    selector: 'app-solicitarPago',
    templateUrl: './solicitarPago.page.html',
    styleUrls: ['./solicitarPago.page.scss'],
})
export class SolicitarPagoPage implements OnInit {

    formModel = {
        idUsuarioSolicitante: 0,
        emailPagador : '',
        monto: 0
    }

    constructor(private router: Router, private formModulo: FormsModule,
                private menuController: MenuController,
                private loadingController: LoadingController,
                private toastController: ToastController,
                private cobroService: CobroService
    ) { }

    ngOnInit() {

    }

    async onSubmit(){
        await this.presentLoading();
        this.cobroService.realizarCobro().subscribe(
            (res:any) => {
                this.loadingController.dismiss();

                this.successToast('success', 'Cobro procesado satisfactioamente')
                this.router.navigateByUrl('/post');
            },
            err => {
                this.loadingController.dismiss();
                console.log(err);
                this.presentToast('danger', err.error.error);
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

}
