var Mercedes = /** @class */ (function () {
    function Mercedes(name, maxSpeed, color) {
        this.name = name;
        this.maxSpeed = maxSpeed;
        this.color = color;
    }
    return Mercedes;
}());
function fib(x) {
    if (x < 2) {
        return 1;
    }
    return fib(x - 2) + fib(x - 1);
}
for (var i = 0; i < 10; i++) {
    console.log(fib(i));
}
