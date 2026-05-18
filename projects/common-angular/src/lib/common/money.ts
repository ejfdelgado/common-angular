
export function numberToMoney(amount: number, symbol: string = "$") {
    return (
        symbol +
        Number(amount)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    );
}