interface JQueryWeekpickerOptions extends JQueryUI.DatepickerOptions {
    weekLength?: number;
    startField?: Element | JQuery;
    endField?: Element | JQuery;
}

interface JQuery {
    weekpicker(): JQuery;
    weekpicker(options?: JQueryWeekpickerOptions): JQuery;
}