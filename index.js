class ThreeDimen {
    constructor(side, long, width, height) {
        this.side = side
        this.long = long
        this.width = width
        this.height = height
    }
}

class VolumeKubus extends ThreeDimen {
    constructor(side) {
        super(side)
        this.side = side
    }

    VKubus() {
        return this.side * this.side * this.side
    }
}

class LuasKubus extends ThreeDimen {
    constructor(side) {
        super(side)
        this.side = side
    }

    LKubus() {
        return 6 * (this.side * this.side)
    }
}

class KelilingKubus extends ThreeDimen {
    constructor(side) {
        super(side)
        this.side = side
    }

    KKubus() {
        return 12 * this.side
    }
}

class VolumeBalok extends ThreeDimen {
    constructor(long, width, height) {
        super(long, width, height)
        this.long = long
        this.width = width
        this.height = height
    }

    VBalok() {
        return this.long * this.width * this.height
    }
}

class LuasBalok extends ThreeDimen {
    constructor(long, width, height) {
        super(long, width, height)
        this.long = long
        this.width = width
        this.height = height
    }

    LBalok() {
        return 2 * ((this.long * this.width) + (this.width * this.height) + (this.long * this.height))
    }
}

class KelilingBalok extends ThreeDimen {
    constructor(long, width, height) {
        super(long, width, height)
        this.long = long
        this.width = width
        this.height = height
    }

    KBalok() {
        return 4 * (this.long + this.width + this.height)
    }
}

const VolumeeKubus = new VolumeKubus(10)
console.log('side * side * side    side = 10')
console.log(VolumeeKubus.VKubus())

const LuasKubuss = new LuasKubus(10)
console.log('6 * (side * side)    side = 10')
console.log(LuasKubuss.LKubus())

const KelilinggKubus = new KelilingKubus(10)
console.log('12 * side    side = 10')
console.log(KelilinggKubus.KKubus())

const VolmeBalok = new VolumeBalok(5, 6, 7)
console.log('long * width * height    long = 5, width = 6, height = 7')
console.log(VolmeBalok.VBalok())

const LuassBalok = new LuasBalok(5, 6, 7)
console.log('2 * ((long * width) + (width * height) + (long * height)    long = 5, width = 6, height = 7')
console.log(LuassBalok.LBalok())

const KelilinggBalok = new KelilingBalok(5, 6, 7)
console.log('4 * (long + width + height)    long = 5, width = 6, height = 7')
console.log(KelilinggBalok.KBalok())