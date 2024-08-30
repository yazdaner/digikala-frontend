export const inputKeyUp = function () {};
export const inputFocusout = function () {
    if (this.value == "" || this.value == null) {
        this.top = "12px";
    } else {
        this.top = "-12px";
    }
    // show error
    const result = validateInput(this.props, this.value);
    if (result != true) {
        this.error = result;
    } else {
        this.error = false;
    }   
};

// return error
export const validateInput = function (props, value) {
    let result = true;
    if (props.rules !== undefined) {
        result = validate(value, props.rules, props.label);
    }
    return result;
};

export const inputFocus = function () {
    this.top = "-12px";
};
export const inputClick = function () {
    this.top = "-12px";
};

function validate(value, rules, label) {
    if (typeof rules == "string") {
        rules = rules.toString().split("|");
    }
    let result = true;
    for (let i = 0; i < rules.length; i++) {
        if (result == true) {
            const ruleArrName = rules[i].toString().split(":");
            if (ruleArrName.length == 2) {
            } else {
                result = eval("check" + ruleArrName)(value, label);
            }
        }
    }
    return result;
}
function checkrequired(value, label) {
    if (value == undefined || value.toString().trim() == "") {
        return `${label} نمی تواند خالی باشد`;
    } else {
        return true;
    }
}
