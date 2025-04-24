import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaItensComponent } from './categoria-itens.component';

describe('CategoriaItensComponent', () => {
  let component: CategoriaItensComponent;
  let fixture: ComponentFixture<CategoriaItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaItensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
