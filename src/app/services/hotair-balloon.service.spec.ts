import { TestBed } from '@angular/core/testing';

import { HotairBalloonService } from './hotair-balloon.service';

describe('HotairBalloonService', () => {
  let service: HotairBalloonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotairBalloonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
