export interface TourDetails {
    tourName: String,
    no_of_days: Number,
    package_cost: Number
    visitingPlaces: String[],
    dayWiseDetails: DayWiseDetails[]
}

interface DayWiseDetails {
    day: Number,
    schedule: String[]
}
