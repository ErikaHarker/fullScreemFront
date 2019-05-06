import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerbottonComponent } from './triggerbotton.component';

describe('TriggerbottonComponent', () => {
  let component: TriggerbottonComponent;
  let fixture: ComponentFixture<TriggerbottonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriggerbottonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriggerbottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
