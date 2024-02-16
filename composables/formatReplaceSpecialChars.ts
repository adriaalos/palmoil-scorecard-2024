export const useFormatReplaceSpecialChars = (str: string) => {
    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove accents
        .replace(/'/g, ''); // Remove '
}