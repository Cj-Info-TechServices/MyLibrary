import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingReadsComponent } from './pending-reads.component';

describe('PendingReadsComponent', () => {
  let component: PendingReadsComponent;
  let fixture: ComponentFixture<PendingReadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingReadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingReadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
