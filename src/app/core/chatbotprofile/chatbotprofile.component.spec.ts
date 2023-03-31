import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotprofileComponent } from './chatbotprofile.component';

describe('ChatbotprofileComponent', () => {
  let component: ChatbotprofileComponent;
  let fixture: ComponentFixture<ChatbotprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbotprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
