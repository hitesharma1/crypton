const axios = require('axios');
const colors = require('colors');

class CryptoAPI{
    constructor(apiKey){
        this.apiKey = apiKey,
        this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
    }

    async getPriceData(coinOp, currOp){
        try{
            const res = await axios.get(
                `${this.baseUrl}?key=${this.apiKey}&ids=${coinOp}&convert=${currOp}`
            );

            let output = '';

            res.data.forEach(coin => {
                output += `${coin.rank.magenta} - ${coin.symbol.yellow} (${coin.name.cyan}) | Price: ${coin.price.green}\n`; 
            });

            return output;
        }catch(err){
            console.error(err);
        }
    }

}

module.exports = CryptoAPI;