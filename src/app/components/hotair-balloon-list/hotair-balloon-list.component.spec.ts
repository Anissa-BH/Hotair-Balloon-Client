import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotairBalloonListComponent } from './hotair-balloon-list.component';

describe('HotairBalloonListComponent', () => {
  let component: HotairBalloonListComponent;
  let fixture: ComponentFixture<HotairBalloonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotairBalloonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotairBalloonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
