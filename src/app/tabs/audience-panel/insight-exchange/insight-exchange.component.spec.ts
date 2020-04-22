import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightExchangeComponent } from './insight-exchange.component';

describe('InsightExchangeComponent', () => {
  let component: InsightExchangeComponent;
  let fixture: ComponentFixture<InsightExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
