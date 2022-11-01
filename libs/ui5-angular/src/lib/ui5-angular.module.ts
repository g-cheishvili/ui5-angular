import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarEndContentSlot } from './slots/bar-end-content.slot';
import { BarStartContentSlot } from './slots/bar-start-content.slot';
import { BarDirective } from './directives/bar.directive';
import { BarcodeScannerDialogDirective } from './directives/barcode-scanner-dialog.directive';
import { DynamicSideContentSideContentSlot } from './slots/dynamic-side-content-side-content.slot';
import { DynamicSideContentDirective } from './directives/dynamic-side-content.directive';
import { FilterItemValuesSlot } from './slots/filter-item-values.slot';
import { FilterItemDirective } from './directives/filter-item.directive';
import { FilterItemOptionDirective } from './directives/filter-item-option.directive';
import { FlexibleColumnLayoutEndColumnSlot } from './slots/flexible-column-layout-end-column.slot';
import { FlexibleColumnLayoutMidColumnSlot } from './slots/flexible-column-layout-mid-column.slot';
import { FlexibleColumnLayoutStartColumnSlot } from './slots/flexible-column-layout-start-column.slot';
import { FlexibleColumnLayoutDirective } from './directives/flexible-column-layout.directive';
import { IllustratedMessageSubtitleSlot } from './slots/illustrated-message-subtitle.slot';
import { IllustratedMessageTitleSlot } from './slots/illustrated-message-title.slot';
import { IllustratedMessageDirective } from './directives/illustrated-message.directive';
import { MediaGalleryDirective } from './directives/media-gallery.directive';
import { MediaGalleryItemThumbnailSlot } from './slots/media-gallery-item-thumbnail.slot';
import { MediaGalleryItemDirective } from './directives/media-gallery-item.directive';
import { NotificationActionDirective } from './directives/notification-action.directive';
import { NotificationListGroupItemActionsSlot } from './slots/notification-list-group-item-actions.slot';
import { NotificationListGroupItemDirective } from './directives/notification-list-group-item.directive';
import { NotificationListItemActionsSlot } from './slots/notification-list-item-actions.slot';
import { NotificationListItemAvatarSlot } from './slots/notification-list-item-avatar.slot';
import { NotificationListItemFootnotesSlot } from './slots/notification-list-item-footnotes.slot';
import { NotificationListItemDirective } from './directives/notification-list-item.directive';
import { NotificationListItemBaseActionsSlot } from './slots/notification-list-item-base-actions.slot';
import { NotificationListItemBaseDirective } from './directives/notification-list-item-base.directive';
import { PageFooterSlot } from './slots/page-footer.slot';
import { PageHeaderSlot } from './slots/page-header.slot';
import { PageDirective } from './directives/page.directive';
import { ProductSwitchDirective } from './directives/product-switch.directive';
import { ProductSwitchItemDirective } from './directives/product-switch-item.directive';
import { ShellBarLogoSlot } from './slots/shell-bar-logo.slot';
import { ShellBarMenuItemsSlot } from './slots/shell-bar-menu-items.slot';
import { ShellBarProfileSlot } from './slots/shell-bar-profile.slot';
import { ShellBarSearchFieldSlot } from './slots/shell-bar-search-field.slot';
import { ShellBarStartButtonSlot } from './slots/shell-bar-start-button.slot';
import { ShellBarDirective } from './directives/shell-bar.directive';
import { ShellBarItemDirective } from './directives/shell-bar-item.directive';
import { SideNavigationFixedItemsSlot } from './slots/side-navigation-fixed-items.slot';
import { SideNavigationHeaderSlot } from './slots/side-navigation-header.slot';
import { SideNavigationDirective } from './directives/side-navigation.directive';
import { SideNavigationItemDirective } from './directives/side-navigation-item.directive';
import { SideNavigationSubItemDirective } from './directives/side-navigation-sub-item.directive';
import { SortItemDirective } from './directives/sort-item.directive';
import { TimelineDirective } from './directives/timeline.directive';
import { TimelineItemDirective } from './directives/timeline-item.directive';
import { UploadCollectionHeaderSlot } from './slots/upload-collection-header.slot';
import { UploadCollectionDirective } from './directives/upload-collection.directive';
import { UploadCollectionItemThumbnailSlot } from './slots/upload-collection-item-thumbnail.slot';
import { UploadCollectionItemDirective } from './directives/upload-collection-item.directive';
import { ViewSettingsDialogFilterItemsSlot } from './slots/view-settings-dialog-filter-items.slot';
import { ViewSettingsDialogSortItemsSlot } from './slots/view-settings-dialog-sort-items.slot';
import { ViewSettingsDialogDirective } from './directives/view-settings-dialog.directive';
import { WizardDirective } from './directives/wizard.directive';
import { WizardStepDirective } from './directives/wizard-step.directive';
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
import { CheckBoxCva } from './cvas/check-box.cva';
import { CheckBoxDirective } from './directives/check-box.directive';
import { ColorPaletteDirective } from './directives/color-palette.directive';
import { ColorPaletteItemDirective } from './directives/color-palette-item.directive';
import { ColorPalettePopoverDirective } from './directives/color-palette-popover.directive';
import { ColorPickerDirective } from './directives/color-picker.directive';
import { ComboBoxCva } from './cvas/combo-box.cva';
import { ComboBoxIconSlot } from './slots/combo-box-icon.slot';
import { ComboBoxValueStateMessageSlot } from './slots/combo-box-value-state-message.slot';
import { ComboBoxDirective } from './directives/combo-box.directive';
import { ComboBoxGroupItemDirective } from './directives/combo-box-group-item.directive';
import { ComboBoxItemDirective } from './directives/combo-box-item.directive';
import { CustomListItemDeleteButtonSlot } from './slots/custom-list-item-delete-button.slot';
import { CustomListItemDirective } from './directives/custom-list-item.directive';
import { DatePickerCva } from './cvas/date-picker.cva';
import { DatePickerValueStateMessageSlot } from './slots/date-picker-value-state-message.slot';
import { DatePickerDirective } from './directives/date-picker.directive';
import { DateRangePickerCva } from './cvas/date-range-picker.cva';
import { DateRangePickerValueStateMessageSlot } from './slots/date-range-picker-value-state-message.slot';
import { DateRangePickerDirective } from './directives/date-range-picker.directive';
import { DateTimePickerCva } from './cvas/date-time-picker.cva';
import { DateTimePickerValueStateMessageSlot } from './slots/date-time-picker-value-state-message.slot';
import { DateTimePickerDirective } from './directives/date-time-picker.directive';
import { DayPickerDirective } from './directives/day-picker.directive';
import { DialogFooterSlot } from './slots/dialog-footer.slot';
import { DialogHeaderSlot } from './slots/dialog-header.slot';
import { DialogDirective } from './directives/dialog.directive';
import { FileUploaderCva } from './cvas/file-uploader.cva';
import { FileUploaderValueStateMessageSlot } from './slots/file-uploader-value-state-message.slot';
import { FileUploaderDirective } from './directives/file-uploader.directive';
import { GroupHeaderListItemDirective } from './directives/group-header-list-item.directive';
import { IconDirective } from './directives/icon.directive';
import { InputCva } from './cvas/input.cva';
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
import { MultiComboBoxCva } from './cvas/multi-combo-box.cva';
import { MultiComboBoxIconSlot } from './slots/multi-combo-box-icon.slot';
import { MultiComboBoxValueStateMessageSlot } from './slots/multi-combo-box-value-state-message.slot';
import { MultiComboBoxDirective } from './directives/multi-combo-box.directive';
import { MultiComboBoxGroupItemDirective } from './directives/multi-combo-box-group-item.directive';
import { MultiComboBoxItemDirective } from './directives/multi-combo-box-item.directive';
import { MultiInputCva } from './cvas/multi-input.cva';
import { MultiInputIconSlot } from './slots/multi-input-icon.slot';
import { MultiInputValueStateMessageSlot } from './slots/multi-input-value-state-message.slot';
import { MultiInputTokensSlot } from './slots/multi-input-tokens.slot';
import { MultiInputDirective } from './directives/multi-input.directive';
import { OptionDirective } from './directives/option.directive';
import { PanelHeaderSlot } from './slots/panel-header.slot';
import { PanelDirective } from './directives/panel.directive';
import { PopoverFooterSlot } from './slots/popover-footer.slot';
import { PopoverHeaderSlot } from './slots/popover-header.slot';
import { PopoverDirective } from './directives/popover.directive';
import { ProgressIndicatorDirective } from './directives/progress-indicator.directive';
import { RadioButtonCva } from './cvas/radio-button.cva';
import { RadioButtonDirective } from './directives/radio-button.directive';
import { RangeSliderCva } from './cvas/range-slider.cva';
import { RangeSliderDirective } from './directives/range-slider.directive';
import { RatingIndicatorDirective } from './directives/rating-indicator.directive';
import { ResponsivePopoverFooterSlot } from './slots/responsive-popover-footer.slot';
import { ResponsivePopoverHeaderSlot } from './slots/responsive-popover-header.slot';
import { ResponsivePopoverDirective } from './directives/responsive-popover.directive';
import { SegmentedButtonDirective } from './directives/segmented-button.directive';
import { SegmentedButtonItemDirective } from './directives/segmented-button-item.directive';
import { SelectValueStateMessageSlot } from './slots/select-value-state-message.slot';
import { SelectDirective } from './directives/select.directive';
import { SliderCva } from './cvas/slider.cva';
import { SliderDirective } from './directives/slider.directive';
import { SliderBaseDirective } from './directives/slider-base.directive';
import { SplitButtonDirective } from './directives/split-button.directive';
import { StandardListItemDeleteButtonSlot } from './slots/standard-list-item-delete-button.slot';
import { StandardListItemDirective } from './directives/standard-list-item.directive';
import { StepInputValueStateMessageSlot } from './slots/step-input-value-state-message.slot';
import { StepInputDirective } from './directives/step-input.directive';
import { SuggestionGroupItemDirective } from './directives/suggestion-group-item.directive';
import { SuggestionItemDirective } from './directives/suggestion-item.directive';
import { SwitchCva } from './cvas/switch.cva';
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
import { TimePickerCva } from './cvas/time-picker.cva';
import { TimePickerValueStateMessageSlot } from './slots/time-picker-value-state-message.slot';
import { TimePickerDirective } from './directives/time-picker.directive';
import { TitleDirective } from './directives/title.directive';
import { ToastDirective } from './directives/toast.directive';
import { ToggleButtonDirective } from './directives/toggle-button.directive';
import { TokenCloseIconSlot } from './slots/token-close-icon.slot';
import { TokenDirective } from './directives/token.directive';
import { TreeHeaderSlot } from './slots/tree-header.slot';
import { TreeDirective } from './directives/tree.directive';
import { TreeItemDirective } from './directives/tree-item.directive';
import { TreeListItemDeleteButtonSlot } from './slots/tree-list-item-delete-button.slot';
import { TreeListItemDirective } from './directives/tree-list-item.directive';
import { WheelSliderDirective } from './directives/wheel-slider.directive';
import { YearPickerDirective } from './directives/year-picker.directive';

@NgModule({
  declarations: [
    BarEndContentSlot,
    BarStartContentSlot,
    BarDirective,
    BarcodeScannerDialogDirective,
    DynamicSideContentSideContentSlot,
    DynamicSideContentDirective,
    FilterItemValuesSlot,
    FilterItemDirective,
    FilterItemOptionDirective,
    FlexibleColumnLayoutEndColumnSlot,
    FlexibleColumnLayoutMidColumnSlot,
    FlexibleColumnLayoutStartColumnSlot,
    FlexibleColumnLayoutDirective,
    IllustratedMessageSubtitleSlot,
    IllustratedMessageTitleSlot,
    IllustratedMessageDirective,
    MediaGalleryDirective,
    MediaGalleryItemThumbnailSlot,
    MediaGalleryItemDirective,
    NotificationActionDirective,
    NotificationListGroupItemActionsSlot,
    NotificationListGroupItemDirective,
    NotificationListItemActionsSlot,
    NotificationListItemAvatarSlot,
    NotificationListItemFootnotesSlot,
    NotificationListItemDirective,
    NotificationListItemBaseActionsSlot,
    NotificationListItemBaseDirective,
    PageFooterSlot,
    PageHeaderSlot,
    PageDirective,
    ProductSwitchDirective,
    ProductSwitchItemDirective,
    ShellBarLogoSlot,
    ShellBarMenuItemsSlot,
    ShellBarProfileSlot,
    ShellBarSearchFieldSlot,
    ShellBarStartButtonSlot,
    ShellBarDirective,
    ShellBarItemDirective,
    SideNavigationFixedItemsSlot,
    SideNavigationHeaderSlot,
    SideNavigationDirective,
    SideNavigationItemDirective,
    SideNavigationSubItemDirective,
    SortItemDirective,
    TimelineDirective,
    TimelineItemDirective,
    UploadCollectionHeaderSlot,
    UploadCollectionDirective,
    UploadCollectionItemThumbnailSlot,
    UploadCollectionItemDirective,
    ViewSettingsDialogFilterItemsSlot,
    ViewSettingsDialogSortItemsSlot,
    ViewSettingsDialogDirective,
    WizardDirective,
    WizardStepDirective,
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
    CheckBoxCva,
    CheckBoxDirective,
    ColorPaletteDirective,
    ColorPaletteItemDirective,
    ColorPalettePopoverDirective,
    ColorPickerDirective,
    ComboBoxCva,
    ComboBoxIconSlot,
    ComboBoxValueStateMessageSlot,
    ComboBoxDirective,
    ComboBoxGroupItemDirective,
    ComboBoxItemDirective,
    CustomListItemDeleteButtonSlot,
    CustomListItemDirective,
    DatePickerCva,
    DatePickerValueStateMessageSlot,
    DatePickerDirective,
    DateRangePickerCva,
    DateRangePickerValueStateMessageSlot,
    DateRangePickerDirective,
    DateTimePickerCva,
    DateTimePickerValueStateMessageSlot,
    DateTimePickerDirective,
    DayPickerDirective,
    DialogFooterSlot,
    DialogHeaderSlot,
    DialogDirective,
    FileUploaderCva,
    FileUploaderValueStateMessageSlot,
    FileUploaderDirective,
    GroupHeaderListItemDirective,
    IconDirective,
    InputCva,
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
    MultiComboBoxCva,
    MultiComboBoxIconSlot,
    MultiComboBoxValueStateMessageSlot,
    MultiComboBoxDirective,
    MultiComboBoxGroupItemDirective,
    MultiComboBoxItemDirective,
    MultiInputCva,
    MultiInputIconSlot,
    MultiInputValueStateMessageSlot,
    MultiInputTokensSlot,
    MultiInputDirective,
    OptionDirective,
    PanelHeaderSlot,
    PanelDirective,
    PopoverFooterSlot,
    PopoverHeaderSlot,
    PopoverDirective,
    ProgressIndicatorDirective,
    RadioButtonCva,
    RadioButtonDirective,
    RangeSliderCva,
    RangeSliderDirective,
    RatingIndicatorDirective,
    ResponsivePopoverFooterSlot,
    ResponsivePopoverHeaderSlot,
    ResponsivePopoverDirective,
    SegmentedButtonDirective,
    SegmentedButtonItemDirective,
    SelectValueStateMessageSlot,
    SelectDirective,
    SliderCva,
    SliderDirective,
    SliderBaseDirective,
    SplitButtonDirective,
    StandardListItemDeleteButtonSlot,
    StandardListItemDirective,
    StepInputValueStateMessageSlot,
    StepInputDirective,
    SuggestionGroupItemDirective,
    SuggestionItemDirective,
    SwitchCva,
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
    TimePickerCva,
    TimePickerValueStateMessageSlot,
    TimePickerDirective,
    TitleDirective,
    ToastDirective,
    ToggleButtonDirective,
    TokenCloseIconSlot,
    TokenDirective,
    TreeHeaderSlot,
    TreeDirective,
    TreeItemDirective,
    TreeListItemDeleteButtonSlot,
    TreeListItemDirective,
    WheelSliderDirective,
    YearPickerDirective,
  ],
  imports: [CommonModule],
  exports: [
    BarEndContentSlot,
    BarStartContentSlot,
    BarDirective,
    BarcodeScannerDialogDirective,
    DynamicSideContentSideContentSlot,
    DynamicSideContentDirective,
    FilterItemValuesSlot,
    FilterItemDirective,
    FilterItemOptionDirective,
    FlexibleColumnLayoutEndColumnSlot,
    FlexibleColumnLayoutMidColumnSlot,
    FlexibleColumnLayoutStartColumnSlot,
    FlexibleColumnLayoutDirective,
    IllustratedMessageSubtitleSlot,
    IllustratedMessageTitleSlot,
    IllustratedMessageDirective,
    MediaGalleryDirective,
    MediaGalleryItemThumbnailSlot,
    MediaGalleryItemDirective,
    NotificationActionDirective,
    NotificationListGroupItemActionsSlot,
    NotificationListGroupItemDirective,
    NotificationListItemActionsSlot,
    NotificationListItemAvatarSlot,
    NotificationListItemFootnotesSlot,
    NotificationListItemDirective,
    NotificationListItemBaseActionsSlot,
    NotificationListItemBaseDirective,
    PageFooterSlot,
    PageHeaderSlot,
    PageDirective,
    ProductSwitchDirective,
    ProductSwitchItemDirective,
    ShellBarLogoSlot,
    ShellBarMenuItemsSlot,
    ShellBarProfileSlot,
    ShellBarSearchFieldSlot,
    ShellBarStartButtonSlot,
    ShellBarDirective,
    ShellBarItemDirective,
    SideNavigationFixedItemsSlot,
    SideNavigationHeaderSlot,
    SideNavigationDirective,
    SideNavigationItemDirective,
    SideNavigationSubItemDirective,
    SortItemDirective,
    TimelineDirective,
    TimelineItemDirective,
    UploadCollectionHeaderSlot,
    UploadCollectionDirective,
    UploadCollectionItemThumbnailSlot,
    UploadCollectionItemDirective,
    ViewSettingsDialogFilterItemsSlot,
    ViewSettingsDialogSortItemsSlot,
    ViewSettingsDialogDirective,
    WizardDirective,
    WizardStepDirective,
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
    CheckBoxCva,
    CheckBoxDirective,
    ColorPaletteDirective,
    ColorPaletteItemDirective,
    ColorPalettePopoverDirective,
    ColorPickerDirective,
    ComboBoxCva,
    ComboBoxIconSlot,
    ComboBoxValueStateMessageSlot,
    ComboBoxDirective,
    ComboBoxGroupItemDirective,
    ComboBoxItemDirective,
    CustomListItemDeleteButtonSlot,
    CustomListItemDirective,
    DatePickerCva,
    DatePickerValueStateMessageSlot,
    DatePickerDirective,
    DateRangePickerCva,
    DateRangePickerValueStateMessageSlot,
    DateRangePickerDirective,
    DateTimePickerCva,
    DateTimePickerValueStateMessageSlot,
    DateTimePickerDirective,
    DayPickerDirective,
    DialogFooterSlot,
    DialogHeaderSlot,
    DialogDirective,
    FileUploaderCva,
    FileUploaderValueStateMessageSlot,
    FileUploaderDirective,
    GroupHeaderListItemDirective,
    IconDirective,
    InputCva,
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
    MultiComboBoxCva,
    MultiComboBoxIconSlot,
    MultiComboBoxValueStateMessageSlot,
    MultiComboBoxDirective,
    MultiComboBoxGroupItemDirective,
    MultiComboBoxItemDirective,
    MultiInputCva,
    MultiInputIconSlot,
    MultiInputValueStateMessageSlot,
    MultiInputTokensSlot,
    MultiInputDirective,
    OptionDirective,
    PanelHeaderSlot,
    PanelDirective,
    PopoverFooterSlot,
    PopoverHeaderSlot,
    PopoverDirective,
    ProgressIndicatorDirective,
    RadioButtonCva,
    RadioButtonDirective,
    RangeSliderCva,
    RangeSliderDirective,
    RatingIndicatorDirective,
    ResponsivePopoverFooterSlot,
    ResponsivePopoverHeaderSlot,
    ResponsivePopoverDirective,
    SegmentedButtonDirective,
    SegmentedButtonItemDirective,
    SelectValueStateMessageSlot,
    SelectDirective,
    SliderCva,
    SliderDirective,
    SliderBaseDirective,
    SplitButtonDirective,
    StandardListItemDeleteButtonSlot,
    StandardListItemDirective,
    StepInputValueStateMessageSlot,
    StepInputDirective,
    SuggestionGroupItemDirective,
    SuggestionItemDirective,
    SwitchCva,
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
    TimePickerCva,
    TimePickerValueStateMessageSlot,
    TimePickerDirective,
    TitleDirective,
    ToastDirective,
    ToggleButtonDirective,
    TokenCloseIconSlot,
    TokenDirective,
    TreeHeaderSlot,
    TreeDirective,
    TreeItemDirective,
    TreeListItemDeleteButtonSlot,
    TreeListItemDirective,
    WheelSliderDirective,
    YearPickerDirective,
  ],
})
export class Ui5AngularModule {}
