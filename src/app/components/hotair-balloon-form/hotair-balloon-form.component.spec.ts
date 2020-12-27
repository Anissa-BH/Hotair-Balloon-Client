import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotairBalloonFormComponent } from './hotair-balloon-form.component';

describe('HotairBalloonFormComponent', () => {
  let component: HotairBalloonFormComponent;
  let fixture: ComponentFixture<HotairBalloonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotairBalloonFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotairBalloonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
