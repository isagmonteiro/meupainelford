import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfcadPage } from './confcad.page';

describe('ConfcadPage', () => {
  let component: ConfcadPage;
  let fixture: ComponentFixture<ConfcadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfcadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfcadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
