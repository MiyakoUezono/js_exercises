export const axis ={
    r :Math.SQRT2,
    theta:Math.PI / 4,

    get x() {return this.r * Math.cos(this.theta)},
    set x(newvalue){
        if(Number.isNaN(newvalue)){
            throw new TypeError('NaN')
        }else{
        const old_y = this.y
        this.r = Math.sqrt(newvalue**2 + old_y**2)
        this.theta = Math.atan2(old_y, newvalue)
        }
    },
    get y() {return this.r * Math.sin(this.theta)},
    set y(newvalue){
        if(Number.isNaN(newvalue)){
            throw new TypeError('NaN')
        }
        else{
        const old_x = this.x
        this.r = Math.sqrt(old_x**2 + newvalue**2)
        this.theta = Math.atan2(newvalue, old_x)
        }

    }
}

/*
修正前：
let axis ={
    r :Math.SQRT2,
    theta:Math.PI / 4,

    get x() {return this.r * Math.cos(this.theta)},
    set x(newvalue){
        if(newvalue === NaN){
            throw new TypeError()
        }
        else{
        this.r = Math.sqrt((newvalue**2 + (this.r**2 * Math.sin(this.theta)**2))) 
        this.theta = Math.atan2(Math.sin(this.theta), newvalue/this.r) //上式でthis.rが更新されてしまう
        }
    },
    get y() {return this.r * Math.sin(this.theta)},
    set y(newvalue){
        if(newvalue === NaN){
            throw new TypeError()
        }
        this.r = Math.sqrt((this.r**2 * Math.cos(this.theta)**2 + newvalue**2))
        this.theta = Math.atan2(newvalue/this.r, Math.cos(this.theta))
    }

}
*/