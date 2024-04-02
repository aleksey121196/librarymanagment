import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlibraryComponent } from './inlibrary.component';

describe('InlibraryComponent', () => {
  let component: InlibraryComponent;
  let fixture: ComponentFixture<InlibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InlibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InlibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
