// 数据交易状态
const TRANSACTION_STATUS_MAP = {
    "0": "INITIAL",
    INITIAL: 'INITIAL',
    "1": "CONFIRMED",
    CONFIRMED: 'CONFIRMED',
    "99": "PRIVACY_REJECTED",
    PRIVACY_REJECTED: 'PRIVACY_REJECTED'
}
// 数据源状态
const DATA_SOURCE_STATUS_MAP = {
    "0": "INITIAL",
    INITIAL: 'INITIAL',
    "1": "UPLOADED",
    UPLOADED: "UPLOADED",
    "2": "PAYED",
    PAYED: "PAYED",
    "3": "NO_DATA",
    NO_DATA: "NO_DATA",
    "99": "VALIDATE_FAIL",
    VALIDATE_FAIL: "VALIDATE_FAIL"
}
// 支付状态
const PAY_STATUS={
    NOT_PAYED:"NOT_PAYED",
    PAYING:"PAYING",
    PAYED:"PAYED",
    PAY_FAILED:"PAY_FAILED"
}

const DOWNLOAD_STATUS={
    NOT_DOWNLOADED:"NOT_DOWNLOADED",
    DOWNLOADING:"DOWNLOADING",
    DOWNLOADED:"DOWNLOADED",
    DOWNLOAD_FAILED:"DOWNLOAD_FAILED"
}

//系统错误
const SYSTEM_ERROR_CODE = {
    NOT_FOUND:"NOT_FOUND",
    INVALID_PARAMS:"INVALID_PARAMS",
    DATASOURCE_OFFLINE:"DATASOURCE_OFFLINE",
    FORBIDDEN:"FORBIDDEN",
    BALANCE_NOT_ENOUGH:"BALANCE_NOT_ENOUGH",
    PRIVACY_REJECTED:"PRIVACY_REJECTED",
    UNKNOWN_ERROR:"UNKNOWN_ERROR"
}

export {
    TRANSACTION_STATUS_MAP,
    DATA_SOURCE_STATUS_MAP,
    PAY_STATUS,
    DOWNLOAD_STATUS,
    SYSTEM_ERROR_CODE
}