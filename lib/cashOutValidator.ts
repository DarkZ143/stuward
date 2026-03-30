export const MIN_SW_CASHOUT = 100;
export const MAX_SW_CASHOUT = 1000;

export function validateCashOut(requestedAmount: number, userWinningBalance: number) {
    if (!requestedAmount || isNaN(requestedAmount)) {
        return { isValid: false, error: "Please enter a valid amount." };
    }

    if (requestedAmount < MIN_SW_CASHOUT) {
        return { isValid: false, error: `Minimum cash out is ${MIN_SW_CASHOUT} SW coins.` };
    }

    if (requestedAmount > MAX_SW_CASHOUT) {
        return { isValid: false, error: `Maximum cash out is ${MAX_SW_CASHOUT} SW coins.` };
    }

    if (requestedAmount > userWinningBalance) {
        return { isValid: false, error: "Insufficient winning balance." };
    }

    return { isValid: true, error: null };
}