/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EquipInUseComponent } from './EquipInUse.component';

describe('EquipInUseComponent', () => {
  let component: EquipInUseComponent;
  let fixture: ComponentFixture<EquipInUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipInUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipInUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
