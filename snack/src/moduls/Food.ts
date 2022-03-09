// 定义食物类 food
class Food {
    // 定义一个属性表示食物所对应的元素
    element: HTMLElement
    constructor () {
        this.element = document.getElementById('food')!  // 加 ! 表示不会为空 避免报错
    }
    // 定义一个获取食物 x 坐标的方法
    get X() {
        return this.element.offsetLeft
    }
    
    // 定义一个获取食物 y 坐标的方法
    get Y() {
        return this.element.offsetTop
    }

    // 修改食物位置
    change() {
        // 食物位置 最小 0 最大 290
        // 蛇移动一次是一格 一格大小是10px 要求食物每次移动10px
        // Math.round(Math.random() * 290) // Math.round 四舍五入 将 Math.random生成的(0-1)*290=>(0-290)变成包括两端的 [0-290]
        let top = Math.round(Math.random() * 29) * 10  // 整体 * 10
        let left = Math.round(Math.random() * 29) * 10  // 整体 * 10
        // Math.floor(Math.random() * 30) * 10  // floor 向下取整 取到29
        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
    }
}

// 测试代码
const food = new Food()
console.log(food.X, food.Y)
food.change()
console.log(food.X, food.Y)

export default Food