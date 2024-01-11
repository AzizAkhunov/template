import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasicComponent } from './fantasic.component';

describe('FantasicComponent', () => {
  let component: FantasicComponent;
  let fixture: ComponentFixture<FantasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FantasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FantasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
