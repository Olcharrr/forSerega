function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}
function clean() {
    document.form.textview.value = "";
}
function back() {
    const len = document.form.textview.value;
    document.form.textview.value = len.substring(0, len.length-1);
}
function equal() {
    const str = document.form.textview.value;
    if(str) {
        document.form.textview.value = eval(str);
    }
}
