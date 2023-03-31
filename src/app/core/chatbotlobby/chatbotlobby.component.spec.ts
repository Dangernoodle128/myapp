import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotlobbyComponent } from './chatbotlobby.component';

describe('ChatbotlobbyComponent', () => {
  let component: ChatbotlobbyComponent;
  let fixture: ComponentFixture<ChatbotlobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbotlobbyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotlobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
