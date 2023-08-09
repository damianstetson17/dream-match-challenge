/**
 * Convert from yyyy-mm-dd to dd-MM-yyyy
 * 
 * @param date 
 * @returns new formatted date string dd-MM-yyyy
 */
export function convertDateFormat(date: string): string {
    const parts = date.split('-'); 
    if (parts.length > 3) {
        throw new Error('Invalid date format');
    }
    
    const day = parts[2];
    const month = parts[1];
    const year = parts[0];
    
    return `${day}-${month}-${year}`;
}