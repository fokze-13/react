interface Car {
    name: string;
    maxSpeed: number;
}

class Mercedes implements Car {
    name: string;
    maxSpeed: number;
    color: string;

    constructor(name: string, maxSpeed: number, color: string) {
        this.name = name;
        this.maxSpeed = maxSpeed;
        this.color = color;
    }
}


function fib(x: number): number {
    if (x < 2) {
        return 1
    }

    return fib(x - 2) + fib(x - 1);
}


for (let i = 0; i < 10; i++) {
    console.log(fib(i))
}
