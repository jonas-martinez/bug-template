'use strict'

module.exports = (data, props, _event) => {
    data.value = props.value
    return data
}