import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AprobarReintegroPage } from './aprobarReintegro.page';

describe('AprobarReintegroPage', () => {
    let component: AprobarReintegroPage;
    let fixture: ComponentFixture<AprobarReintegroPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AprobarReintegroPage ],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(AprobarReintegroPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
