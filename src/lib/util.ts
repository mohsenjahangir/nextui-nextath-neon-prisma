import { differenceInYears } from "date-fns";

export default function calculateAge(dob: Date) {
    return differenceInYears(new Date(), dob)
}