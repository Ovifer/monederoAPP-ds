import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BilleteraPage } from './billetera.page';

describe('BilleteraPage', () => {
    let component: BilleteraPage;
    let fixture: ComponentFixture<BilleteraPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BilleteraPage ],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(BilleteraPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
