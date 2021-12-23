import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizaComponent } from './visualiza.component';

describe('VisualizaComponent', () => {
  let component: VisualizaComponent;
  let fixture: ComponentFixture<VisualizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
