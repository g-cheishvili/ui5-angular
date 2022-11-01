import { Directive, ElementRef, Input, Output } from '@angular/core';

import { AvatarDirective } from './avatar.directive';
import { NotificationListGroupItemDirective } from './notification-list-group-item.directive';
import { NotificationListItemDirective } from './notification-list-item.directive';
import { CustomListItemDirective } from './custom-list-item.directive';
import { GroupHeaderListItemDirective } from './group-header-list-item.directive';
import { StandardListItemDirective } from './standard-list-item.directive';
import { InputDirective } from './input.directive';
import { ButtonDirective } from './button.directive';

import { PlaceholderOutput } from '../utils/placeholder-output';
import { Observable } from 'rxjs';

import { booleanInput, BooleanInputType } from '../utils/boolean-input';

import '@ui5/webcomponents-fiori/dist/ShellBar.js';
interface ShellBarElement {
  accessibilityRoles: Record<string, any>;
  accessibilityTexts: Record<string, any>;
  copilotDomRef: HTMLElement;
  logoDomRef: HTMLElement;
  notificationsCount: string;
  notificationsDomRef: HTMLElement;
  overflowDomRef: HTMLElement;
  primaryTitle: string;
  productSwitchDomRef: HTMLElement;
  profileDomRef: HTMLElement;
  secondaryTitle: string;
  showCoPilot: BooleanInputType;
  showNotifications: BooleanInputType;
  showProductSwitch: BooleanInputType;

  // Slots
  logo: AvatarDirective['element'];
  menuItems: Array<
    | NotificationListGroupItemDirective['element']
    | NotificationListItemDirective['element']
    | CustomListItemDirective['element']
    | GroupHeaderListItemDirective['element']
    | StandardListItemDirective['element']
  >;
  profile: AvatarDirective['element'];
  searchField: InputDirective['element'];
  startButton: ButtonDirective['element'];
}

interface OutputTypes {
  coPilotClick: { targetRef: HTMLElement };

  logoClick: { targetRef: HTMLElement };

  menuItemClick: { item: HTMLElement };

  notificationsClick: { targetRef: HTMLElement };

  productSwitchClick: { targetRef: HTMLElement };

  profileClick: { targetRef: HTMLElement };
}

@Directive({
  selector: 'ui5-shellbar',
})
export class ShellBarDirective {
  @Input()
  set accessibilityRoles(val: ShellBarElement['accessibilityRoles']) {
    this.elementRef.nativeElement.accessibilityRoles = val;
  }
  get accessibilityRoles() {
    return this.elementRef.nativeElement.getAttribute(
      'accessibility-roles'
    ) as unknown as ShellBarElement['accessibilityRoles'];
  }
  @Input()
  set accessibilityTexts(val: ShellBarElement['accessibilityTexts']) {
    this.elementRef.nativeElement.accessibilityTexts = val;
  }
  get accessibilityTexts() {
    return this.elementRef.nativeElement.getAttribute(
      'accessibility-texts'
    ) as unknown as ShellBarElement['accessibilityTexts'];
  }
  @Input()
  set copilotDomRef(val: ShellBarElement['copilotDomRef']) {
    this.elementRef.nativeElement.copilotDomRef = val;
  }
  get copilotDomRef() {
    return this.elementRef.nativeElement.getAttribute(
      'copilot-dom-ref'
    ) as unknown as ShellBarElement['copilotDomRef'];
  }
  @Input()
  set logoDomRef(val: ShellBarElement['logoDomRef']) {
    this.elementRef.nativeElement.logoDomRef = val;
  }
  get logoDomRef() {
    return this.elementRef.nativeElement.getAttribute(
      'logo-dom-ref'
    ) as unknown as ShellBarElement['logoDomRef'];
  }
  @Input()
  set notificationsCount(val: ShellBarElement['notificationsCount']) {
    this.elementRef.nativeElement.notificationsCount = val;
  }
  get notificationsCount() {
    return this.elementRef.nativeElement.getAttribute(
      'notifications-count'
    ) as unknown as ShellBarElement['notificationsCount'];
  }
  @Input()
  set notificationsDomRef(val: ShellBarElement['notificationsDomRef']) {
    this.elementRef.nativeElement.notificationsDomRef = val;
  }
  get notificationsDomRef() {
    return this.elementRef.nativeElement.getAttribute(
      'notifications-dom-ref'
    ) as unknown as ShellBarElement['notificationsDomRef'];
  }
  @Input()
  set overflowDomRef(val: ShellBarElement['overflowDomRef']) {
    this.elementRef.nativeElement.overflowDomRef = val;
  }
  get overflowDomRef() {
    return this.elementRef.nativeElement.getAttribute(
      'overflow-dom-ref'
    ) as unknown as ShellBarElement['overflowDomRef'];
  }
  @Input()
  set primaryTitle(val: ShellBarElement['primaryTitle']) {
    this.elementRef.nativeElement.primaryTitle = val;
  }
  get primaryTitle() {
    return this.elementRef.nativeElement.getAttribute(
      'primary-title'
    ) as unknown as ShellBarElement['primaryTitle'];
  }
  @Input()
  set productSwitchDomRef(val: ShellBarElement['productSwitchDomRef']) {
    this.elementRef.nativeElement.productSwitchDomRef = val;
  }
  get productSwitchDomRef() {
    return this.elementRef.nativeElement.getAttribute(
      'product-switch-dom-ref'
    ) as unknown as ShellBarElement['productSwitchDomRef'];
  }
  @Input()
  set profileDomRef(val: ShellBarElement['profileDomRef']) {
    this.elementRef.nativeElement.profileDomRef = val;
  }
  get profileDomRef() {
    return this.elementRef.nativeElement.getAttribute(
      'profile-dom-ref'
    ) as unknown as ShellBarElement['profileDomRef'];
  }
  @Input()
  set secondaryTitle(val: ShellBarElement['secondaryTitle']) {
    this.elementRef.nativeElement.secondaryTitle = val;
  }
  get secondaryTitle() {
    return this.elementRef.nativeElement.getAttribute(
      'secondary-title'
    ) as unknown as ShellBarElement['secondaryTitle'];
  }
  @Input()
  set showCoPilot(val: ShellBarElement['showCoPilot']) {
    this.elementRef.nativeElement.showCoPilot = booleanInput(val);
  }
  get showCoPilot() {
    return this.elementRef.nativeElement.hasAttribute('show-co-pilot');
  }
  @Input()
  set showNotifications(val: ShellBarElement['showNotifications']) {
    this.elementRef.nativeElement.showNotifications = booleanInput(val);
  }
  get showNotifications() {
    return this.elementRef.nativeElement.hasAttribute('show-notifications');
  }
  @Input()
  set showProductSwitch(val: ShellBarElement['showProductSwitch']) {
    this.elementRef.nativeElement.showProductSwitch = booleanInput(val);
  }
  get showProductSwitch() {
    return this.elementRef.nativeElement.hasAttribute('show-product-switch');
  }

  @Output('co-pilot-click') coPilotClick: Observable<
    CustomEvent<OutputTypes['coPilotClick']>
  > = new PlaceholderOutput();
  @Output('logo-click') logoClick: Observable<
    CustomEvent<OutputTypes['logoClick']>
  > = new PlaceholderOutput();
  @Output('menu-item-click') menuItemClick: Observable<
    CustomEvent<OutputTypes['menuItemClick']>
  > = new PlaceholderOutput();
  @Output('notifications-click') notificationsClick: Observable<
    CustomEvent<OutputTypes['notificationsClick']>
  > = new PlaceholderOutput();
  @Output('product-switch-click') productSwitchClick: Observable<
    CustomEvent<OutputTypes['productSwitchClick']>
  > = new PlaceholderOutput();
  @Output('profile-click') profileClick: Observable<
    CustomEvent<OutputTypes['profileClick']>
  > = new PlaceholderOutput();
  constructor(private elementRef: ElementRef<ShellBarElement & HTMLElement>) {}

  get element(): typeof this.elementRef['nativeElement'] {
    return this.elementRef.nativeElement;
  }

  get logo(): ShellBarElement['logo'] {
    return this.elementRef.nativeElement.logo;
  }

  get menuItems(): ShellBarElement['menuItems'] {
    return this.elementRef.nativeElement.menuItems;
  }

  get profile(): ShellBarElement['profile'] {
    return this.elementRef.nativeElement.profile;
  }

  get searchField(): ShellBarElement['searchField'] {
    return this.elementRef.nativeElement.searchField;
  }

  get startButton(): ShellBarElement['startButton'] {
    return this.elementRef.nativeElement.startButton;
  }
}
