export default function (value: any) {
    value = value.toLowerCase()
    if (value === 'yes') {
        return 'ok';
    }
    if (value === 'no' || value.includes('n/a') || !value ) {
        return 'not';
    }
    if (value.includes('none')) {
        return 'none';
    }
    if (value.includes('partially')) {
        return 'partially';
    }
}