import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CuentaService {

    constructor(private http: HttpClient, private form: FormBuilder) { }



    obtenerTipoCuenta(){
        let header = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
        return this.http.get('http://localhost:49681/api/Dashboard/TiposCuentas', {headers: header});
    }

    obtenerBanco(){
        let header = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
        return this.http.get('http://localhost:49681/api/Dashboard/Bancos', {headers: header});
    }


    obtenerCuentas(){
        let header = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
        let param = new HttpParams().set('idUsuario', localStorage.getItem('idUsuario'));

        return this.http.get('http://localhost:49681/api/Dashboard/cuentas',{params: param, headers: header})
    }

}
