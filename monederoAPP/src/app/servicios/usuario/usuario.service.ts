import { Injectable } from '@angular/core';
import { Usuario } from "../../interfaces/usuario.model";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {

    constructor(private http: HttpClient, private form: FormBuilder) { }

    usuarioModel = this.form.group({
        nombre : ['', Validators.required],
        apellido : ['', Validators.required],
        telefono : ['', Validators.required],
        direccion : ['', Validators.required],
        razonSocial : ['', Validators.required],
        idEstadoCivil : [0, Validators.required],
        idUsuario : [0 , Validators.required]
    });




    estadosCiviles(){
        let header = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
        return this.http.get('http://localhost:5000/api/Dashboard/EstadosCiviles', {headers: header})
    }

    getDatosUsuario(){
        let header = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
        let param = new HttpParams().set('Usuario', localStorage.getItem('email'));
        let url = "http://localhost:5000/api/Dashboard/InformacionPersona";
        return this.http.get(url, {params: param, headers: header});
    }

    registrar(registerForm) {

        return this.http.post('http://localhost:5000/api/Authentication/Register', registerForm);
    }

    iniciarSesion(loginForm){
        return this.http.post('http://localhost:5000/api/Authentication/Login', loginForm)
    }

    modificarUsaurio(){
        let header = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
        var body = {
            nombre : this.usuarioModel.value.nombre,
            apellido : this.usuarioModel.value.apellido,
            telefono : this.usuarioModel.value.telefono,
            direccion : this.usuarioModel.value.direccion,
            razonSocial : this.usuarioModel.value.razonSocial,
            idEstadoCivil : Number(this.usuarioModel.value.idEstadoCivil),
            idUsuario: parseInt(localStorage.getItem('idUsuario'))
        };
        return this.http.post('http://localhost:5000/api/Authentication/Modification', body , {headers: header});
    }

    ejecutarCierre(){

        let header = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
        let param = new HttpParams().set('IdUsuario', localStorage.getItem('idUsuario'));
        let url = "http://localhost:5000/api/HistorialOperaciones/Ejecutarcierre";


        return this.http.get(url, {params: param, headers: header});
    }

}
