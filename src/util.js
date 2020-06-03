export default {
    formalCurrency: function (num) {
        return '$' + Number(num.toFixed(1)).toLocaleString() + ' ';
    }
}