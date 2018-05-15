import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescTextComponent } from './desc-text.component';

describe('DescTextComponent', () => {
  let component: DescTextComponent;
  let fixture: ComponentFixture<DescTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
