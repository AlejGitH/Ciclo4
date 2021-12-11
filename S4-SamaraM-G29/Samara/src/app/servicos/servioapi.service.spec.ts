import { TestBed } from '@angular/core/testing';

import { ServioapiService } from './servioapi.service';

describe('ServioapiService', () => {
  let service: ServioapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServioapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
