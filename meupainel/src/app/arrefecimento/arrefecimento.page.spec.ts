import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArrefecimentoPage } from './arrefecimento.page';

describe('ArrefecimentoPage', () => {
  let component: ArrefecimentoPage;
  let fixture: ComponentFixture<ArrefecimentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrefecimentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArrefecimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
