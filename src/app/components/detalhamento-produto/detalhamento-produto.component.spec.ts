import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhamentoProdutoComponent } from './detalhamento-produto.component';

describe('DetalhamentoProdutoComponent', () => {
  let component: DetalhamentoProdutoComponent;
  let fixture: ComponentFixture<DetalhamentoProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhamentoProdutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhamentoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
