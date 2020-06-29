import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolicitarPagoPage } from './solicitarPago.page';

describe('SolicitarPagoPage', () => {
    let component: SolicitarPagoPage;
    let fixture: ComponentFixture<SolicitarPagoPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SolicitarPagoPage ],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(SolicitarPagoPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
