import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UsuariosService } from './servicios/usuario/usuario.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { AlertController } from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  navigate : any;

  monto: number;
  referencia: string;
  dia: number;
  mes: number;
  año: number;


  constructor(
      private platform: Platform,
      private splashScreen: SplashScreen,
      private statusBar: StatusBar,
      private usuarioService: UsuariosService,
      public toastController : ToastController,
      private loadingController: LoadingController,
      private alertController: AlertController,
      private router: Router

  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu()
  {
    this.navigate =
        [
          {
            title : "Historial de Cobros",
            url   : "/cobros",
            icon  : "list-outline"
          },
          {
            title : "Reintegros",
            url   : "/aprobar-reintegro",
            icon  : "reload-outline"
          },
          {
            title : "Realizar cobro",
            url   : "/solicitar-pago",
            icon  : "cash-outline"
          },
          {
            title : "Billetera",
            url   : "/billetera",
            icon  : "wallet-outline"
          },
          {
            title : "Perfil",
            url   : "/perfil",
            icon  : "person-outline"
          }

        ]
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

  async ejecutarCierre(){
    this.usuarioService.ejecutarCierre().subscribe(
        (data: any) => {
          this.monto = data.monto;
          this.dia = data.fecha.day;
          this.mes = data.fecha.month;
          this.año = data.fecha.year;
          this.referencia = data.referencia;


        }
    )
    const alert = await this.alertController.create({
      header: 'Monto: '+ Number(this.monto),
      subHeader: 'Fecha: '+ Number(this.dia)+'/'+Number(this.mes)+'/'+Number(this.año),
      message: 'Referencia: '+ this.referencia,
      buttons: ['OK']
    });
    await alert.present();
  }
}
