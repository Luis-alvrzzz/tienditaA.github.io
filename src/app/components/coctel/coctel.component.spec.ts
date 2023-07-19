import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctelComponent } from './coctel.component';

describe('CoctelComponent', () => {
  let component: CoctelComponent;
  let fixture: ComponentFixture<CoctelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoctelComponent]
    });
    fixture = TestBed.createComponent(CoctelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
