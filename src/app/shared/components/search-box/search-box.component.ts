import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: false,

  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  // @ViewChild('txtInput')
  // public txtInput!: ElementRef<HTMLInputElement>;

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue( value: string ): void {
    this.onValue.emit(value);
  };

};
