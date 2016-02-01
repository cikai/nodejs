var canadianDolla = 0.91;

function roundTwoDecimal(amount) {
    return Math.round(amount * 100) / 100;
}

exports.canadianToUS = function(canadian) {
    return roundTwoDecimal(canadian * canadianDolla);
}

exports.USToCanadian = function(us) {
    return roundTwoDecimal(us / canadianDolla);
}