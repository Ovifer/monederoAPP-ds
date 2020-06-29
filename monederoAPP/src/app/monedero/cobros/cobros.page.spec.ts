import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CobrosPage } from './cobros.page';

describe('CobrosPage', () => {
    let component: CobrosPage;
    let fixture: ComponentFixture<CobrosPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CobrosPage ],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(CobrosPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
