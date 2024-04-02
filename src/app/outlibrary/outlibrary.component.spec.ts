import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlibraryComponent } from './outlibrary.component';

describe('OutlibraryComponent', () => {
  let component: OutlibraryComponent;
  let fixture: ComponentFixture<OutlibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutlibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutlibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
