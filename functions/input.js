export function input(props, model) {
    const top = ref("-12px");
    const error = ref(false);

    const focusout = function () {
        if (model.value == "" || model.value == null) {
            top.value = "12px";
        } else {
            top.value = "-12px";
        }
        // show error
        const result = validateInput(props, model.value);
        if (result != true) {
            error.value = result;
        } else {
            error.value = false;
        }
    };

    const focus = function () {
        top.value = "-12px";
    };

    const click = function () {
        top.value = "-12px";
    };

    const validateInput = function (props, value) {
        let result = true;
        if (props.rules !== undefined) {
            result = validate(value, props.rules, props.label);
        }
        if (result != true) {
            error.value = result;
        } else {
            error.value = false;
        }
        return result;
    };

    const validate = function (value, rules, label) {
        if (typeof rules == "string") {
            rules = rules.toString().split("|");
        }
        let result = true;
        for (let i = 0; i < rules.length; i++) {
            if (result == true && rules[i] !== undefined) {
                if (typeof rules[i] == "function") {
                    result = rules[i](value, label);
                } else {
                    const ruleArrName = rules[i].toString().split(":");
                    if (ruleArrName.length == 2) {
                        // todo
                    } else {
                        result = eval("check" + ruleArrName[0])(value, label);
                    }
                }
            }
        }
        return result;
    };

    const checkrequired = function (value, label) {
        if (value == undefined || value.toString().trim() == "") {
            return `${label} نمی تواند خالی باشد`;
        } else {
            return true;
        }
    };

    const checkmobile = function (value, label) {
        let result = `${label} وارد شده معتبر نمی باشد`;
        if (!isNaN(value)) {
            value = parseInt(value);
            if (
                value.toString().length == 10 &&
                value.toString().charAt(0) == "9"
            ) {
                result = true;
            }
        }
        return result;
    };

    const checkemail = function (value, label) {
        let result = `${label} وارد شده معتبر نمی باشد`;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
            result = true;
        }
        return result;
    };

    return {
        top,
        error,
        focusout,
        focus,
        click,
        validateInput,
    };
}
