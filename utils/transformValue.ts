export default function (value: any) {
    value = value.toLowerCase()
    if (value.includes('partially')) {
        return 'partially';
    }

    if (value === 'no') {
        return 'no';
    }

    if (value === 'yes') {
        return 'yes';
    }
}