import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssistenciaPage } from './assistencia.page';

describe('AssistenciaPage', () => {
  let component: AssistenciaPage;
  let fixture: ComponentFixture<AssistenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
