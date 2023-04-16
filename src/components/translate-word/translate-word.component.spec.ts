import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateWordComponent } from './translate-word.component';

describe('GoPageComponent', () => {
  let component: TranslateWordComponent;
  let fixture: ComponentFixture<TranslateWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslateWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslateWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
