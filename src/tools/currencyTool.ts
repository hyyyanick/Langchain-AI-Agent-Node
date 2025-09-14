import { tool } from "@langchain/core/tools";

export const convertCurrency = tool(
    async (
        {fromCurrency, toCurrency, amount}: 
        {fromCurrency: string, toCurrency: string, amount: number}
    ) => {
        const response = await fetch(`https://frankfurter.app/latest?amount=${amount}`);
        const data = await response.json();
        return data.rates[toCurrency];
    }
)