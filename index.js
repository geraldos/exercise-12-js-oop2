class ThreeDimen {
    constructor(side, long, width, height) {
        this.side = side
        this.long = long
        this.width = width
        this.height = height
    }

    VKubus() {
        return this.side * this.side * this.side
    }

    LKubus() {
        return 6 * (this.side * this.side)
    }

    KKubus() {
        return 12 * this.side
    }

    VBalok() {
        return this.long * this.width * this.height
    }

    LBalok() {
        return 2 * (this.long + this.width + this.height)
    }

    KBalok() {
        return 4 * (this.long + this.width + this.height)
    }
}

const VolmeKubus = new ThreeDimen(10)
console.log('side * side * side    side = 10')
console.log(VolmeKubus.VKubus())

const LuasKubus = new ThreeDimen(10)
console.log('6 * (side * side)    side = 10')
console.log(LuasKubus.LKubus())

const KelilingKubus = new ThreeDimen(10)
console.log('12 * side    side = 10')
console.log(KelilingKubus.KKubus())

const VolmeBalok = new ThreeDimen(0, 5, 6, 7)
console.log('long * width * height    long = 5, width = 6, height = 7')
console.log(VolmeBalok.VBalok())

const LuasBalok = new ThreeDimen(0, 5, 6, 7)
console.log('2 * (long + width + height)    long = 5, width = 6, height = 7')
console.log(LuasBalok.LBalok())

const KelilingBalok = new ThreeDimen(0, 5, 6, 7)
console.log('4 * (long + width + height)    long = 5, width = 6, height = 7')
console.log(KelilingBalok.KBalok())