export const inputKeyUp = function () {};
export const inputFocusout = function () {
    if(this.value == ''){
        this.top = '12px';
    }else{
        this.top = '-12px';
    }
};
export const inputClick = function () {
    this.top = '-12px';
};
