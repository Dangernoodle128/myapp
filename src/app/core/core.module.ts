import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { WorkComponent } from './work/work.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { SnackComponent } from './snack/snack.component';
import { PipeComponent } from './pipe/pipe.component';
import { FindPipe } from '../shared/pipes/find.pipe';
import { ChatbotlobbyComponent } from './chatbotlobby/chatbotlobby.component';
import { ChatbotprofileComponent } from './chatbotprofile/chatbotprofile.component';

@NgModule({
  declarations: [
    HomeComponent,
    WorkComponent,
    NavbarComponent,
    SnackComponent,
    PipeComponent,
    FindPipe,
    ChatbotlobbyComponent,
    ChatbotprofileComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
  ]
})
export class CoreModule { }
