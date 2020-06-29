import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CuentaReintegroPage } from './cuentaReintegro.page';

describe('CuentaReintegroPage', () => {
    let component: CuentaReintegroPage;
    let fixture: ComponentFixture<CuentaReintegroPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CuentaReintegroPage ],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(CuentaReintegroPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
