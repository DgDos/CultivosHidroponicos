import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadoInfoComponent } from './cuidado-info.component';

describe('CuidadoInfoComponent', () => {
  let component: CuidadoInfoComponent;
  let fixture: ComponentFixture<CuidadoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuidadoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuidadoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
