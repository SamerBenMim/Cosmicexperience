import { TestBed } from '@angular/core/testing';

import { CommentService } from './comment.service';

describe('CommentServiceTsService', () => {
  let service: CommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
