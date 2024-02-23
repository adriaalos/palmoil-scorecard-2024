export const useFormatString = (str: string, pattern: string): string => {
    let arrayStr = str.split(pattern);
    arrayStr = arrayStr.filter((e) => e !== '' && e !== ' ');
    return arrayStr.toString().replace(/,/g, ', ');
}