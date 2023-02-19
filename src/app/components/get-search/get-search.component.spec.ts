import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSearchComponent } from './get-search.component';

describe('GetSearchComponent', () => {
  let component: GetSearchComponent;
  let fixture: ComponentFixture<GetSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
