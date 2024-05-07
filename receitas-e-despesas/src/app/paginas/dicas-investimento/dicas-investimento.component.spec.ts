import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicasInvestimentoComponent } from './dicas-investimento.component';

describe('DicasInvestimentoComponent', () => {
  let component: DicasInvestimentoComponent;
  let fixture: ComponentFixture<DicasInvestimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DicasInvestimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DicasInvestimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
