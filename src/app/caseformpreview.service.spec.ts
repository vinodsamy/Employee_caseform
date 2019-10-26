import { TestBed } from '@angular/core/testing';

import { CaseformpreviewService } from './caseformpreview.service';

describe('CaseformpreviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaseformpreviewService = TestBed.get(CaseformpreviewService);
    expect(service).toBeTruthy();
  });
});
