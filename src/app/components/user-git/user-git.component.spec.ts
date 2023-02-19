import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGitComponent } from './user-git.component';

describe('UserGitComponent', () => {
  let component: UserGitComponent;
  let fixture: ComponentFixture<UserGitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
