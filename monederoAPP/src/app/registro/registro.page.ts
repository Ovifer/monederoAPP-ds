import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../servicios/usuario/usuario.service";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.page.html',
    styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

    formModel = {
        idTipoUsuario: '1',
        idTipoIdentificacion: '1',
        ano_registro: '',
        mes_registro: '',
        dia_registro: '',
        nro_identificacion: '',
        telefono: '',
        direccion: '',
        estatus: '',
        comercio: '',
        nombre: '',
        apellido: '',
        ano_nacimiento: '',
        mes_nacimiento: '',
        dia_nacimiento: '',
        razon_social: '',
        UserName: '',
        Email : '',
        Password : ''
    }

    constructor(private usuario: UsuariosService, private router: Router,  private formBuilder: FormBuilder)
    {

    }

    ngOnInit() {
    }

    onSubmit(form: NgForm){
        this.usuario.registrar(form.value).subscribe(
            (res:any) => {
                console.log(res); // res JSON
                this.router.navigateByUrl('/monedero');
            },
            err => {
                console.log(err); // error JSON
            }
        );
    }

}
