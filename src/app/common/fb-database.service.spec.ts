import { TestBed } from '@angular/core/testing';

import { FbDatabaseService } from './fb-database.service';

describe('FbDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FbDatabaseService = TestBed.get(FbDatabaseService);
    expect(service).toBeTruthy();
  });
});
