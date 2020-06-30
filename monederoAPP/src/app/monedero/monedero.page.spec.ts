import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MonederoPage } from './Monedero.page';

describe('MonederoPage', () => {
  let component: MonederoPage;
  let fixture: ComponentFixture<MonederoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonederoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonederoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
