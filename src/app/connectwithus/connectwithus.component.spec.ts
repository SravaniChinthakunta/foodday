import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectwithusComponent } from './connectwithus.component';

describe('ConnectwithusComponent', () => {
  let component: ConnectwithusComponent;
  let fixture: ComponentFixture<ConnectwithusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectwithusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectwithusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
