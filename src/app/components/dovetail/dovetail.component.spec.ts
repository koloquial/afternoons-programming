import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DovetailComponent } from './dovetail.component';

describe('DovetailComponent', () => {
  let component: DovetailComponent;
  let fixture: ComponentFixture<DovetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DovetailComponent]
    });
    fixture = TestBed.createComponent(DovetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
