/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserReserveComponent } from './userReserve.component';

describe('UserReserveComponent', () => {
  let component: UserReserveComponent;
  let fixture: ComponentFixture<UserReserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
