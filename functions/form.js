export const inputKeyUp = function () {};
export const inputFocusout = function () {
    if(this.value == '' || this.value == null){
        this.top = '12px';
    }else{
        this.top = '-12px';
    }
};
export const inputFocus = function () {
        this.top = '-12px';
    
};
export const inputClick = function () {
    this.top = '-12px';
};
