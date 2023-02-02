import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadAspxComponent } from './load-aspx.component';

describe('LoadAspxComponent', () => {
  let component: LoadAspxComponent;
  let fixture: ComponentFixture<LoadAspxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadAspxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadAspxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
