import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiceworldComponent } from './spiceworld.component';

describe('SpiceworldComponent', () => {
  let component: SpiceworldComponent;
  let fixture: ComponentFixture<SpiceworldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiceworldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiceworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
