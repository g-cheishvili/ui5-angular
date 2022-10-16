import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarBadgeSlot } from './slots/avatar-badge.slot';
import { AvatarDirective } from './directives/avatar.directive';
import { AvatarGroupOverflowButtonSlot } from './slots/avatar-group-overflow-button.slot';
import { AvatarGroupDirective } from './directives/avatar-group.directive';
import { BadgeIconSlot } from './slots/badge-icon.slot';
import { BadgeDirective } from './directives/badge.directive';
import { BreadcrumbsDirective } from './directives/breadcrumbs.directive';
import { BreadcrumbsItemDirective } from './directives/breadcrumbs-item.directive';
import { BusyIndicatorDirective } from './directives/busy-indicator.directive';
import { ButtonDirective } from './directives/button.directive';
import { CalendarDirective } from './directives/calendar.directive';
import { CalendarDateDirective } from './directives/calendar-date.directive';
import { CardHeaderSlot } from './slots/card-header.slot';
import { CardDirective } from './directives/card.directive';
import { CardHeaderActionSlot } from './slots/card-header-action.slot';
import { CardHeaderAvatarSlot } from './slots/card-header-avatar.slot';
import { CardHeaderDirective } from './directives/card-header.directive';
import { CarouselDirective } from './directives/carousel.directive';
import { CheckBoxDirective } from './directives/check-box.directive';
import { ColorPaletteDirective } from './directives/color-palette.directive';
import { ColorPaletteItemDirective } from './directives/color-palette-item.directive';
import { ColorPalettePopoverDirective } from './directives/color-palette-popover.directive';
import { ColorPickerDirective } from './directives/color-picker.directive';
import { ComboBoxIconSlot } from './slots/combo-box-icon.slot';
import { ComboBoxValueStateMessageSlot } from './slots/combo-box-value-state-message.slot';
import { ComboBoxDirective } from './directives/combo-box.directive';
import { ComboBoxGroupItemDirective } from './directives/combo-box-group-item.directive';
import { ComboBoxItemDirective } from './directives/combo-box-item.directive';
import { CustomListItemDirective } from './directives/custom-list-item.directive';
import { DatePickerValueStateMessageSlot } from './slots/date-picker-value-state-message.slot';
import { DatePickerDirective } from './directives/date-picker.directive';
import { DateRangePickerDirective } from './directives/date-range-picker.directive';
import { DateTimePickerDirective } from './directives/date-time-picker.directive';
import { DayPickerDirective } from './directives/day-picker.directive';
import { DialogFooterSlot } from './slots/dialog-footer.slot';
import { DialogHeaderSlot } from './slots/dialog-header.slot';
import { DialogDirective } from './directives/dialog.directive';
import { FileUploaderValueStateMessageSlot } from './slots/file-uploader-value-state-message.slot';
import { FileUploaderDirective } from './directives/file-uploader.directive';
import { GroupHeaderListItemDirective } from './directives/group-header-list-item.directive';
import { IconDirective } from './directives/icon.directive';
import { InputIconSlot } from './slots/input-icon.slot';
import { InputValueStateMessageSlot } from './slots/input-value-state-message.slot';
import { InputDirective } from './directives/input.directive';
import { LabelDirective } from './directives/label.directive';
import { LinkDirective } from './directives/link.directive';
import { ListHeaderSlot } from './slots/list-header.slot';
import { ListDirective } from './directives/list.directive';
import { MenuDirective } from './directives/menu.directive';
import { MenuItemDirective } from './directives/menu-item.directive';
import { MessageStripIconSlot } from './slots/message-strip-icon.slot';
import { MessageStripDirective } from './directives/message-strip.directive';
import { MonthPickerDirective } from './directives/month-picker.directive';
import { MultiComboBoxIconSlot } from './slots/multi-combo-box-icon.slot';
import { MultiComboBoxValueStateMessageSlot } from './slots/multi-combo-box-value-state-message.slot';
import { MultiComboBoxDirective } from './directives/multi-combo-box.directive';
import { MultiComboBoxGroupItemDirective } from './directives/multi-combo-box-group-item.directive';
import { MultiComboBoxItemDirective } from './directives/multi-combo-box-item.directive';
import { MultiInputTokensSlot } from './slots/multi-input-tokens.slot';
import { MultiInputDirective } from './directives/multi-input.directive';
import { OptionDirective } from './directives/option.directive';
import { PanelHeaderSlot } from './slots/panel-header.slot';
import { PanelDirective } from './directives/panel.directive';
import { PopoverFooterSlot } from './slots/popover-footer.slot';
import { PopoverHeaderSlot } from './slots/popover-header.slot';
import { PopoverDirective } from './directives/popover.directive';
import { ProgressIndicatorDirective } from './directives/progress-indicator.directive';
import { RadioButtonDirective } from './directives/radio-button.directive';
import { RangeSliderDirective } from './directives/range-slider.directive';
import { RatingIndicatorDirective } from './directives/rating-indicator.directive';
import { ResponsivePopoverDirective } from './directives/responsive-popover.directive';
import { SegmentedButtonDirective } from './directives/segmented-button.directive';
import { SegmentedButtonItemDirective } from './directives/segmented-button-item.directive';
import { SelectValueStateMessageSlot } from './slots/select-value-state-message.slot';
import { SelectDirective } from './directives/select.directive';
import { SliderDirective } from './directives/slider.directive';
import { SliderBaseDirective } from './directives/slider-base.directive';
import { SplitButtonDirective } from './directives/split-button.directive';
import { StandardListItemDirective } from './directives/standard-list-item.directive';
import { StepInputValueStateMessageSlot } from './slots/step-input-value-state-message.slot';
import { StepInputDirective } from './directives/step-input.directive';
import { SuggestionGroupItemDirective } from './directives/suggestion-group-item.directive';
import { SuggestionItemDirective } from './directives/suggestion-item.directive';
import { SwitchDirective } from './directives/switch.directive';
import { TabSubTabsSlot } from './slots/tab-sub-tabs.slot';
import { TabDirective } from './directives/tab.directive';
import { TabContainerOverflowButtonSlot } from './slots/tab-container-overflow-button.slot';
import { TabContainerStartOverflowButtonSlot } from './slots/tab-container-start-overflow-button.slot';
import { TabContainerDirective } from './directives/tab-container.directive';
import { TableColumnsSlot } from './slots/table-columns.slot';
import { TableDirective } from './directives/table.directive';
import { TableCellDirective } from './directives/table-cell.directive';
import { TableColumnDirective } from './directives/table-column.directive';
import { TableGroupRowDirective } from './directives/table-group-row.directive';
import { TableRowDirective } from './directives/table-row.directive';
import { TabSeparatorDirective } from './directives/tab-separator.directive';
import { TextAreaValueStateMessageSlot } from './slots/text-area-value-state-message.slot';
import { TextAreaDirective } from './directives/text-area.directive';
import { TimePickerDirective } from './directives/time-picker.directive';
import { TitleDirective } from './directives/title.directive';
import { ToastDirective } from './directives/toast.directive';
import { ToggleButtonDirective } from './directives/toggle-button.directive';
import { TokenCloseIconSlot } from './slots/token-close-icon.slot';
import { TokenDirective } from './directives/token.directive';
import { TreeHeaderSlot } from './slots/tree-header.slot';
import { TreeDirective } from './directives/tree.directive';
import { TreeItemDirective } from './directives/tree-item.directive';
import { TreeListItemDirective } from './directives/tree-list-item.directive';
import { WheelSliderDirective } from './directives/wheel-slider.directive';
import { YearPickerDirective } from './directives/year-picker.directive';

@NgModule({
  declarations: [
    AvatarBadgeSlot,
    AvatarDirective,
    AvatarGroupOverflowButtonSlot,
    AvatarGroupDirective,
    BadgeIconSlot,
    BadgeDirective,
    BreadcrumbsDirective,
    BreadcrumbsItemDirective,
    BusyIndicatorDirective,
    ButtonDirective,
    CalendarDirective,
    CalendarDateDirective,
    CardHeaderSlot,
    CardDirective,
    CardHeaderActionSlot,
    CardHeaderAvatarSlot,
    CardHeaderDirective,
    CarouselDirective,
    CheckBoxDirective,
    ColorPaletteDirective,
    ColorPaletteItemDirective,
    ColorPalettePopoverDirective,
    ColorPickerDirective,
    ComboBoxIconSlot,
    ComboBoxValueStateMessageSlot,
    ComboBoxDirective,
    ComboBoxGroupItemDirective,
    ComboBoxItemDirective,
    CustomListItemDirective,
    DatePickerValueStateMessageSlot,
    DatePickerDirective,
    DateRangePickerDirective,
    DateTimePickerDirective,
    DayPickerDirective,
    DialogFooterSlot,
    DialogHeaderSlot,
    DialogDirective,
    FileUploaderValueStateMessageSlot,
    FileUploaderDirective,
    GroupHeaderListItemDirective,
    IconDirective,
    InputIconSlot,
    InputValueStateMessageSlot,
    InputDirective,
    LabelDirective,
    LinkDirective,
    ListHeaderSlot,
    ListDirective,
    MenuDirective,
    MenuItemDirective,
    MessageStripIconSlot,
    MessageStripDirective,
    MonthPickerDirective,
    MultiComboBoxIconSlot,
    MultiComboBoxValueStateMessageSlot,
    MultiComboBoxDirective,
    MultiComboBoxGroupItemDirective,
    MultiComboBoxItemDirective,
    MultiInputTokensSlot,
    MultiInputDirective,
    OptionDirective,
    PanelHeaderSlot,
    PanelDirective,
    PopoverFooterSlot,
    PopoverHeaderSlot,
    PopoverDirective,
    ProgressIndicatorDirective,
    RadioButtonDirective,
    RangeSliderDirective,
    RatingIndicatorDirective,
    ResponsivePopoverDirective,
    SegmentedButtonDirective,
    SegmentedButtonItemDirective,
    SelectValueStateMessageSlot,
    SelectDirective,
    SliderDirective,
    SliderBaseDirective,
    SplitButtonDirective,
    StandardListItemDirective,
    StepInputValueStateMessageSlot,
    StepInputDirective,
    SuggestionGroupItemDirective,
    SuggestionItemDirective,
    SwitchDirective,
    TabSubTabsSlot,
    TabDirective,
    TabContainerOverflowButtonSlot,
    TabContainerStartOverflowButtonSlot,
    TabContainerDirective,
    TableColumnsSlot,
    TableDirective,
    TableCellDirective,
    TableColumnDirective,
    TableGroupRowDirective,
    TableRowDirective,
    TabSeparatorDirective,
    TextAreaValueStateMessageSlot,
    TextAreaDirective,
    TimePickerDirective,
    TitleDirective,
    ToastDirective,
    ToggleButtonDirective,
    TokenCloseIconSlot,
    TokenDirective,
    TreeHeaderSlot,
    TreeDirective,
    TreeItemDirective,
    TreeListItemDirective,
    WheelSliderDirective,
    YearPickerDirective,
  ],
  imports: [CommonModule],
  exports: [
    AvatarBadgeSlot,
    AvatarDirective,
    AvatarGroupOverflowButtonSlot,
    AvatarGroupDirective,
    BadgeIconSlot,
    BadgeDirective,
    BreadcrumbsDirective,
    BreadcrumbsItemDirective,
    BusyIndicatorDirective,
    ButtonDirective,
    CalendarDirective,
    CalendarDateDirective,
    CardHeaderSlot,
    CardDirective,
    CardHeaderActionSlot,
    CardHeaderAvatarSlot,
    CardHeaderDirective,
    CarouselDirective,
    CheckBoxDirective,
    ColorPaletteDirective,
    ColorPaletteItemDirective,
    ColorPalettePopoverDirective,
    ColorPickerDirective,
    ComboBoxIconSlot,
    ComboBoxValueStateMessageSlot,
    ComboBoxDirective,
    ComboBoxGroupItemDirective,
    ComboBoxItemDirective,
    CustomListItemDirective,
    DatePickerValueStateMessageSlot,
    DatePickerDirective,
    DateRangePickerDirective,
    DateTimePickerDirective,
    DayPickerDirective,
    DialogFooterSlot,
    DialogHeaderSlot,
    DialogDirective,
    FileUploaderValueStateMessageSlot,
    FileUploaderDirective,
    GroupHeaderListItemDirective,
    IconDirective,
    InputIconSlot,
    InputValueStateMessageSlot,
    InputDirective,
    LabelDirective,
    LinkDirective,
    ListHeaderSlot,
    ListDirective,
    MenuDirective,
    MenuItemDirective,
    MessageStripIconSlot,
    MessageStripDirective,
    MonthPickerDirective,
    MultiComboBoxIconSlot,
    MultiComboBoxValueStateMessageSlot,
    MultiComboBoxDirective,
    MultiComboBoxGroupItemDirective,
    MultiComboBoxItemDirective,
    MultiInputTokensSlot,
    MultiInputDirective,
    OptionDirective,
    PanelHeaderSlot,
    PanelDirective,
    PopoverFooterSlot,
    PopoverHeaderSlot,
    PopoverDirective,
    ProgressIndicatorDirective,
    RadioButtonDirective,
    RangeSliderDirective,
    RatingIndicatorDirective,
    ResponsivePopoverDirective,
    SegmentedButtonDirective,
    SegmentedButtonItemDirective,
    SelectValueStateMessageSlot,
    SelectDirective,
    SliderDirective,
    SliderBaseDirective,
    SplitButtonDirective,
    StandardListItemDirective,
    StepInputValueStateMessageSlot,
    StepInputDirective,
    SuggestionGroupItemDirective,
    SuggestionItemDirective,
    SwitchDirective,
    TabSubTabsSlot,
    TabDirective,
    TabContainerOverflowButtonSlot,
    TabContainerStartOverflowButtonSlot,
    TabContainerDirective,
    TableColumnsSlot,
    TableDirective,
    TableCellDirective,
    TableColumnDirective,
    TableGroupRowDirective,
    TableRowDirective,
    TabSeparatorDirective,
    TextAreaValueStateMessageSlot,
    TextAreaDirective,
    TimePickerDirective,
    TitleDirective,
    ToastDirective,
    ToggleButtonDirective,
    TokenCloseIconSlot,
    TokenDirective,
    TreeHeaderSlot,
    TreeDirective,
    TreeItemDirective,
    TreeListItemDirective,
    WheelSliderDirective,
    YearPickerDirective,
  ],
})
export class Ui5AngularModule {}
