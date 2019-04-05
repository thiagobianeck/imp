const DateConverter = require('../Utils/DateConverter');

class CheckInOut {

    constructor(checkInDate, checkOutDate) {
        Object.assign(this, {
            _checkInDate : DateConverter.textoParaData(checkInDate),
            _checkOutDate : DateConverter.textoParaData(checkOutDate)
        });
    }

    get checkInDate() {
        return this._checkInDate;
    }

    get checkInDateDay() {
        return this._checkInDate.getDate();
    }

    get checkInDateMonthNumber() {
        return this._checkInDate.getMonth() + 1;
    }

    get checkInDateMonthIndex() {
        return this._checkInDate.getMonth();
    }

    get checkInDateMonthName() {
        return DateConverter.retornaNomeMes(this.checkInDateMonthNumber);
    }

    get checkInDateFullYear() {
        return this._checkInDate.getFullYear();
    }

    get checkInFullDate() {
        return DateConverter.dataCompleta(this._checkInDate);
    }

    get checkOutDate() {
        return this._checkOutDate;
    }

    get checkOutDateDay() {
        return this._checkOutDate.getDate();
    }

    get checkOutDateMonthNumber() {
        return this._checkOutDate.getMonth() + 1;
    }

    get checkOutDateMonthIndex() {
        return this._checkOutDate.getMonth();
    }

    get checkOutDateMonthName() {
        return DateConverter.retornaNomeMes(this.checkOutDateMonthNumber);
    }

    get checkOutDateFullYear() {
        return this._checkOutDate.getFullYear();
    }

    get checkOutFullDate() {
        return DateConverter.dataCompleta(this._checkOutDate);
    }

    paraJson() {
        return '{"datasCheck" : ' + this.paraString() + '}';
    }

    paraString() {
        return '{"checkIn": "' + DateConverter.dataParaTexto(this._checkInDate) + '",' +
            '"checkOut": "' + DateConverter.dataParaTexto(this._checkOutDate) + '"}';
    }
}

module.exports = CheckInOut;