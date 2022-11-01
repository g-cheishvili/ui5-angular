import { Directive, ElementRef, Input } from '@angular/core';

import '@ui5/webcomponents-fiori/dist/IllustratedMessage.js';
interface IllustratedMessageElement {
  accessibleNameRef: string;
  name:
    | 'AddColumn'
    | 'AddPeople'
    | 'BalloonSky'
    | 'BeforeSearch'
    | 'Connection'
    | 'EmptyCalendar'
    | 'EmptyList'
    | 'EmptyPlanningCalendar'
    | 'ErrorScreen'
    | 'FilterTable'
    | 'GroupTable'
    | 'NoActivities'
    | 'NoData'
    | 'NoEntries'
    | 'NoFilterResults'
    | 'NoMail'
    | 'NoMail_v1'
    | 'NoNotifications'
    | 'NoSavedItems'
    | 'NoSavedItems_v1'
    | 'NoSearchResults'
    | 'NoTasks'
    | 'NoTasks_v1'
    | 'PageNotFound'
    | 'ReloadScreen'
    | 'ResizeColumn'
    | 'SearchEarth'
    | 'SearchFolder'
    | 'SimpleBalloon'
    | 'SimpleBell'
    | 'SimpleCalendar'
    | 'SimpleCheckMark'
    | 'SimpleConnection'
    | 'SimpleEmptyDoc'
    | 'SimpleEmptyList'
    | 'SimpleError'
    | 'SimpleMagnifier'
    | 'SimpleMail'
    | 'SimpleNoSavedItems'
    | 'SimpleNotFoundMagnifier'
    | 'SimpleReload'
    | 'SimpleTask'
    | 'SleepingBell'
    | 'SortColumn'
    | 'SuccessBalloon'
    | 'SuccessCheckMark'
    | 'SuccessHighFive'
    | 'SuccessScreen'
    | 'Tent'
    | 'TntChartArea'
    | 'TntChartArea2'
    | 'TntChartBar'
    | 'TntChartBPMNFlow'
    | 'TntChartBullet'
    | 'TntChartDoughnut'
    | 'TntChartFlow'
    | 'TntChartGantt'
    | 'TntChartOrg'
    | 'TntChartPie'
    | 'TntCodePlaceholder'
    | 'TntCompany'
    | 'TntComponents'
    | 'TntExternalLink'
    | 'TntFaceID'
    | 'TntFingerprint'
    | 'TntLock'
    | 'TntMission'
    | 'TntNoApplications'
    | 'TntNoFlows'
    | 'TntNoUsers'
    | 'TntRadar'
    | 'TntSecrets'
    | 'TntServices'
    | 'TntSessionExpired'
    | 'TntSessionExpiring'
    | 'TntSuccess'
    | 'TntSuccessfulAuth'
    | 'TntSystems'
    | 'TntTeams'
    | 'TntTools'
    | 'TntUnableToLoad'
    | 'TntUnlock'
    | 'TntUnsuccessfulAuth'
    | 'TntUser2'
    | 'UnableToLoad'
    | 'UnableToLoadImage'
    | 'UnableToUpload'
    | 'UploadCollection';
  size: 'Auto' | 'Base' | 'Dialog' | 'Scene' | 'Spot';
  subtitleText: string;
  titleText: string;

  // Slots
  subtitle: HTMLElement;
  title: HTMLElement;
}

@Directive({
  selector: 'ui5-illustrated-message',
})
export class IllustratedMessageDirective {
  @Input()
  set accessibleNameRef(val: IllustratedMessageElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef() {
    return this.elementRef.nativeElement.accessibleNameRef;
  }
  @Input()
  set name(val: IllustratedMessageElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name() {
    return this.elementRef.nativeElement.name;
  }
  @Input()
  set size(val: IllustratedMessageElement['size']) {
    this.elementRef.nativeElement.size = val;
  }
  get size() {
    return this.elementRef.nativeElement.size;
  }
  @Input()
  set subtitleText(val: IllustratedMessageElement['subtitleText']) {
    this.elementRef.nativeElement.subtitleText = val;
  }
  get subtitleText() {
    return this.elementRef.nativeElement.subtitleText;
  }
  @Input()
  set titleText(val: IllustratedMessageElement['titleText']) {
    this.elementRef.nativeElement.titleText = val;
  }
  get titleText() {
    return this.elementRef.nativeElement.titleText;
  }

  constructor(
    private elementRef: ElementRef<IllustratedMessageElement & HTMLElement>
  ) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get subtitle(): IllustratedMessageElement['subtitle'] {
    return this.elementRef.nativeElement.subtitle;
  }

  get title(): IllustratedMessageElement['title'] {
    return this.elementRef.nativeElement.title;
  }
}
