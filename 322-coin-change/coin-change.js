/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = (coins, amount) => {
    const tabu = initTabu(amount);

    for (let _amount = 1; _amount <= amount; _amount++) {/* Time O(N) */
        for (let coin = 0; coin < coins.length; coin++) {    /* Time O(N) */
            const canUpdate = (coins[coin] <= _amount);
            if (!canUpdate) continue;

            const difference = (_amount - coins[coin]);
            const min = (tabu[difference] + 1);

            tabu[_amount] = Math.min(tabu[_amount], min);    /* Space O(N) */
        }
    }

    return (tabu[amount] <= amount)
        ? tabu[amount]
        : -1;
}

const initTabu = (amount) => {
    const tabu = Array((amount + 1)).fill((amount + 1));

    tabu[0] = 0;

    return tabu;
}



