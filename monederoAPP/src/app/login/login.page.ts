import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuariosService } from '../servicios/usuarios.service';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    formModel = {
        email : '',
        password : '',
        comercio: true
    }

    constructor(private usuario: UsuariosService, private router: Router, private toastController: ToastController, private loadingController: LoadingController ) { }

    ngOnInit() {
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

    async onSubmit(form: NgForm){
        await this.presentLoading();
        this.usuario.iniciarSesion(form.value).subscribe(
            (res:any) => {
                localStorage.setItem('token', res.result.token);
                localStorage.setItem('email', this.formModel.email);
                this.loadingController.dismiss();

                this.router.navigateByUrl('/post');
                console.log("token", res.result.token);
                console.log("usuario", this.formModel.email);
            },
            err => {
                this.loadingController.dismiss();
                this.presentToast('danger', 'Credenciales invalidas. Por favor, vuelva a intentarlo');
            }
        );
    }

}
