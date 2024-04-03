export default function (str: string, pattern: string) {
    let arrayStr = str.split(pattern);
    arrayStr = arrayStr.filter((e) => e !== '' && e !== ' ');
    return arrayStr.toString().replace(/,/g, ', ');
}