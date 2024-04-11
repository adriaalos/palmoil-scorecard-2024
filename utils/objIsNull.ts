export default function (obj: {}) {
    return Object.values(obj).every(val => val == null || val == '' || val == false)
} 
