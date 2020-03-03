function result(resultat, error) {
    if (resultat)
        console.log(resultat);
    else 
        console.error(error);
};


function doOp(first_nbr, ope, second_nbr, callback)
{
    let res = 0;
    const str_ope = '+-*/%^';
    if (isNaN(first_nbr)) {
        callback(null, 'First is not a number');
        return
    }
    if (isNaN(second_nbr)) {
        callback(null, 'Second is not a number');
        return
    }
    if (!str_ope.includes(ope)) {
        callback(null, 'Bad operator');
        return
    }
    if (ope == '/' && second_nbr == 0) {
        callback(null, 'Division by 0');
        return
    }
    if (ope == '-')
        res = first_nbr - second_nbr;
    if (ope == '+')
        res = first_nbr + second_nbr;
    if (ope == '/')
        res = first_nbr / second_nbr;
    if (ope == '*')
        res = first_nbr * second_nbr;
    if (ope == '^')
        res = first_nbr ^ second_nbr;
    if (ope == '%')
        res = first_nbr % second_nbr; 
    callback(res, null)
}