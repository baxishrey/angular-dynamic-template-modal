import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {ComponentA} from './ComponentA/a.component';
import {ComponentB} from './ComponentB/b.component';
import {ModalContent} from './ModalContent/modalcontent.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ModalModule.forRoot() ],
  declarations: [ AppComponent, HelloComponent, ComponentA, ComponentB, ModalContent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [ModalContent]
})
export class AppModule { }
