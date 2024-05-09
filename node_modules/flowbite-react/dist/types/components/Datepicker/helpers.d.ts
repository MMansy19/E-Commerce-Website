export declare enum Views {
    Days = 0,
    Months = 1,
    Years = 2,
    Decades = 3
}
export declare enum WeekStart {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
}
export declare const isDateInRange: (date: Date, minDate?: Date, maxDate?: Date) => boolean;
export declare const isDateEqual: (date: Date, selectedDate: Date) => boolean;
export declare const getFirstDateInRange: (date: Date, minDate?: Date, maxDate?: Date) => Date;
export declare const getFirstDayOfTheMonth: (date: Date, weekStart: WeekStart) => Date;
export declare const getWeekDays: (lang: string, weekStart: WeekStart) => string[];
export declare const addDays: (date: Date, amount: number) => Date;
export declare const addMonths: (date: Date, amount: number) => Date;
export declare const addYears: (date: Date, amount: number) => Date;
export declare const getFormattedDate: (language: string, date: Date, options?: Intl.DateTimeFormatOptions) => string;
export declare const startOfYearPeriod: (date: Date, years: number) => number;
export declare const isDateInDecade: (date: Date, startYear: number) => boolean;
export declare const isDateRangeInDecade: (startDate: Date, endDate: Date, decadeStart: number, decadeEnd: number) => boolean;
