import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFollowersGrapComponent } from './user-followers-grap.component';

describe('UserFollowersGrapComponent', () => {
  let component: UserFollowersGrapComponent;
  let fixture: ComponentFixture<UserFollowersGrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFollowersGrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFollowersGrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
