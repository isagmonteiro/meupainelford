import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutoriaisPage } from './tutoriais.page';

describe('TutoriaisPage', () => {
  let component: TutoriaisPage;
  let fixture: ComponentFixture<TutoriaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutoriaisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutoriaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
