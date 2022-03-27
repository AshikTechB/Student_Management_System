import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputStudentComponent } from './output-student.component';

describe('OutputStudentComponent', () => {
  let component: OutputStudentComponent;
  let fixture: ComponentFixture<OutputStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
