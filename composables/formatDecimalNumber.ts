export const useFormatDecimalNumber = (value: number, t:number) => {
    Number(Number(value).toFixed(t))
}