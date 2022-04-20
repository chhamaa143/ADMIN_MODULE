import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiHishtoryComponent } from './emi-hishtory.component';

describe('EmiHishtoryComponent', () => {
  let component: EmiHishtoryComponent;
  let fixture: ComponentFixture<EmiHishtoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmiHishtoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiHishtoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
