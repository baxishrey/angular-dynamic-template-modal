import { Component, ViewChild, TemplateRef } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import {ModalContent} from './ModalContent/modalcontent.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  @ViewChild('templateA', {static: true}) templateA: TemplateRef;
  @ViewChild('templateB', {static: true}) templateB: TemplateRef;

  modalRefA: BsModalRef;
  modalRefB: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openModalA(){
    const initialState = {
      templateRef: this.templateA
    }
    this.modalRefA = this.modalService.show(ModalContent, {initialState});
  }

  openModalB(){
    const initialState = {
      templateRef: this.templateB
    }
    this.modalRefB = this.modalService.show(ModalContent, {initialState});
  }
}
