import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents/dist/FileUploader.js';
interface FileUploaderElement {
  accept: string;
  disabled: BooleanInputType;
  files: any;
  hideInput: BooleanInputType;
  multiple: BooleanInputType;
  name: string;
  placeholder: string;
  value: string;
  valueState: 'None' | 'Success' | 'Warning' | 'Error' | 'Information';

  // Slots
  valueStateMessage: Array<HTMLElement>;
}

interface OutputTypes {
  change: { files: any };
}

@Directive({
  selector: 'ui5-file-uploader',
})
export class FileUploaderDirective {
  @Input()
  set accept(val: FileUploaderElement['accept']) {
    this.elementRef.nativeElement.accept = val;
  }
  get accept() {
    return this.elementRef.nativeElement.getAttribute(
      'accept'
    ) as unknown as FileUploaderElement['accept'];
  }
  @Input()
  set disabled(val: FileUploaderElement['disabled']) {
    this.elementRef.nativeElement.disabled = booleanInput(val);
  }
  get disabled() {
    return this.elementRef.nativeElement.hasAttribute('disabled');
  }
  @Input()
  set files(val: FileUploaderElement['files']) {
    this.elementRef.nativeElement.files = val;
  }
  get files() {
    return this.elementRef.nativeElement.getAttribute(
      'files'
    ) as unknown as FileUploaderElement['files'];
  }
  @Input()
  set hideInput(val: FileUploaderElement['hideInput']) {
    this.elementRef.nativeElement.hideInput = booleanInput(val);
  }
  get hideInput() {
    return this.elementRef.nativeElement.hasAttribute('hide-input');
  }
  @Input()
  set multiple(val: FileUploaderElement['multiple']) {
    this.elementRef.nativeElement.multiple = booleanInput(val);
  }
  get multiple() {
    return this.elementRef.nativeElement.hasAttribute('multiple');
  }
  @Input()
  set name(val: FileUploaderElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name() {
    return this.elementRef.nativeElement.getAttribute(
      'name'
    ) as unknown as FileUploaderElement['name'];
  }
  @Input()
  set placeholder(val: FileUploaderElement['placeholder']) {
    this.elementRef.nativeElement.placeholder = val;
  }
  get placeholder() {
    return this.elementRef.nativeElement.getAttribute(
      'placeholder'
    ) as unknown as FileUploaderElement['placeholder'];
  }
  @Input()
  set value(val: FileUploaderElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value() {
    return this.elementRef.nativeElement.getAttribute(
      'value'
    ) as unknown as FileUploaderElement['value'];
  }
  @Input()
  set valueState(val: FileUploaderElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState() {
    return this.elementRef.nativeElement.getAttribute(
      'value-state'
    ) as unknown as FileUploaderElement['valueState'];
  }

  @Output() change: Observable<CustomEvent<OutputTypes['change']>> =
    new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<FileUploaderElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get valueStateMessage(): FileUploaderElement['valueStateMessage'] {
    return this.elementRef.nativeElement.valueStateMessage;
  }
}
