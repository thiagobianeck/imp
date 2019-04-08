const DateConverter = require('../Utils/DateConverter');
const DataCheckController = require('../controllers/DataCheckController');
const defaults = require('../Utils/Defaults');

class DataCheck {

    constructor(checkInDate = '', checkOutDate = '') {
        Object.assign(this, DataCheckController.retornaDataCheck(checkInDate, checkOutDate));
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

    jsonObjectReturn(){
        return DataCheckController.jsonObject(this);
    }

    paraJson() {
        return JSON.stringify(this.jsonObjectReturn());
    }
}

module.exports = DataCheck;