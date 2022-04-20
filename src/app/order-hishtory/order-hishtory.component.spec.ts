import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHishtoryComponent } from './order-hishtory.component';

describe('OrderHishtoryComponent', () => {
  let component: OrderHishtoryComponent;
  let fixture: ComponentFixture<OrderHishtoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderHishtoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHishtoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
