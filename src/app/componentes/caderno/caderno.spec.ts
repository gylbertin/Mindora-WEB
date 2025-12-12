import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Caderno } from './caderno';

describe('Caderno', () => {
  let component: Caderno;
  let fixture: ComponentFixture<Caderno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Caderno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Caderno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
