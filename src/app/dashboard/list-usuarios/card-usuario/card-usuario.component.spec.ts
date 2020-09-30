import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUsuarioComponent } from './card-usuario.component';

describe('CardUsuarioComponent', () => {
  let component: CardUsuarioComponent;
  let fixture: ComponentFixture<CardUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
