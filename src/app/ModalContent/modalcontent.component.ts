import { Component, TemplateRef, OnInit, ViewContainerRef, AfterViewInit, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'modal-content',
  templateUrl: './modalcontent.component.html',
  styleUrls: [ './modalcontent.component.css' ]
})
export class ModalContent implements OnInit, AfterViewInit  {
  templateRef: TemplateRef = null;
  @ViewChild('dynamic', {read: ViewContainerRef, static: false}) private viewContainerRef: ViewContainerRef;

constructor(public bsModalRef: BsModalRef) {
  
}
  ngOnInit(){

  }

  ngAfterViewInit(){
    this.viewContainerRef.createEmbeddedView( this.templateRef );
  }
}
