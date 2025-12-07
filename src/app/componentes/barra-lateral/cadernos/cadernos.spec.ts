import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadernos } from './cadernos';

describe('Cadernos', () => {
  let component: Cadernos;
  let fixture: ComponentFixture<Cadernos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cadernos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cadernos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
