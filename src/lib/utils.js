// Import clsx: helps combine class names and ignore false/null values
import { clsx } from "clsx";

// Import twMerge: fixes conflicting Tailwind classes (like 'p-2' and 'p-4')
import { twMerge } from "tailwind-merge";

/*
 * This function combines class names into one clean string.
 * - You can pass strings, variables, or conditions.
 * - It removes any empty or false values.
 * - It makes sure Tailwind classes don't conflict.
 */
export const cn = (...inputs) => {
	return twMerge(clsx(inputs));
};
