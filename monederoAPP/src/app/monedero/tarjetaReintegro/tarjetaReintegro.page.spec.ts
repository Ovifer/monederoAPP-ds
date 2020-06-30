import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TarjetaReintegroPage } from './tarjetaReintegro.page';

describe('TarjetaReintegroPage', () => {
    let component: TarjetaReintegroPage;
    let fixture: ComponentFixture<TarjetaReintegroPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TarjetaReintegroPage ],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(TarjetaReintegroPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
