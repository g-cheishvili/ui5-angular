import { Directive, ElementRef, Input, Output } from '@angular/core';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents-fiori/dist/UploadCollectionItem.js';
interface UploadCollectionItemElement {
  disableDeleteButton: BooleanInputType;
  file: any;
  fileName: string;
  fileNameClickable: BooleanInputType;
  hideRetryButton: BooleanInputType;
  hideTerminateButton: BooleanInputType;
  progress: number;
  uploadState: 'Complete' | 'Error' | 'Ready' | 'Uploading';

  // Slots
  thumbnail: HTMLElement;
}

interface OutputTypes {
  fileNameClick: void;

  rename: void;

  retry: void;

  terminate: void;
}

@Directive({
  selector: 'ui5-upload-collection-item',
})
export class UploadCollectionItemDirective {
  @Input()
  set disableDeleteButton(
    val: UploadCollectionItemElement['disableDeleteButton']
  ) {
    this.elementRef.nativeElement.disableDeleteButton = booleanInput(val);
  }
  get disableDeleteButton() {
    return this.elementRef.nativeElement.hasAttribute('disable-delete-button');
  }
  @Input()
  set file(val: UploadCollectionItemElement['file']) {
    this.elementRef.nativeElement.file = val;
  }
  get file() {
    return this.elementRef.nativeElement.getAttribute(
      'file'
    ) as unknown as UploadCollectionItemElement['file'];
  }
  @Input()
  set fileName(val: UploadCollectionItemElement['fileName']) {
    this.elementRef.nativeElement.fileName = val;
  }
  get fileName() {
    return this.elementRef.nativeElement.getAttribute(
      'file-name'
    ) as unknown as UploadCollectionItemElement['fileName'];
  }
  @Input()
  set fileNameClickable(val: UploadCollectionItemElement['fileNameClickable']) {
    this.elementRef.nativeElement.fileNameClickable = booleanInput(val);
  }
  get fileNameClickable() {
    return this.elementRef.nativeElement.hasAttribute('file-name-clickable');
  }
  @Input()
  set hideRetryButton(val: UploadCollectionItemElement['hideRetryButton']) {
    this.elementRef.nativeElement.hideRetryButton = booleanInput(val);
  }
  get hideRetryButton() {
    return this.elementRef.nativeElement.hasAttribute('hide-retry-button');
  }
  @Input()
  set hideTerminateButton(
    val: UploadCollectionItemElement['hideTerminateButton']
  ) {
    this.elementRef.nativeElement.hideTerminateButton = booleanInput(val);
  }
  get hideTerminateButton() {
    return this.elementRef.nativeElement.hasAttribute('hide-terminate-button');
  }
  @Input()
  set progress(val: UploadCollectionItemElement['progress']) {
    this.elementRef.nativeElement.progress = val;
  }
  get progress() {
    return this.elementRef.nativeElement.getAttribute(
      'progress'
    ) as unknown as UploadCollectionItemElement['progress'];
  }
  @Input()
  set uploadState(val: UploadCollectionItemElement['uploadState']) {
    this.elementRef.nativeElement.uploadState = val;
  }
  get uploadState() {
    return this.elementRef.nativeElement.getAttribute(
      'upload-state'
    ) as unknown as UploadCollectionItemElement['uploadState'];
  }

  @Output('file-name-click') fileNameClick: Observable<
    CustomEvent<OutputTypes['fileNameClick']>
  > = new PlaceholderOutput();
  @Output() rename: Observable<CustomEvent<OutputTypes['rename']>> =
    new PlaceholderOutput();
  @Output() retry: Observable<CustomEvent<OutputTypes['retry']>> =
    new PlaceholderOutput();
  @Output() terminate: Observable<CustomEvent<OutputTypes['terminate']>> =
    new PlaceholderOutput();
  constructor(
    private elementRef: ElementRef<UploadCollectionItemElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get thumbnail(): UploadCollectionItemElement['thumbnail'] {
    return this.elementRef.nativeElement.thumbnail;
  }
}
