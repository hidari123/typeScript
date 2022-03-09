class Snack {
    // 获取蛇的容器
    element: HTMLElement
    // 表示蛇头的元素
    head: HTMLElement
    // 蛇的身体（包括蛇头）
    bodies: HTMLCollection
    constructor () {
        this.element = document.getElementById('snack')!
        this.head = document.querySelector('#snack > div') as HTMLElement
        this.bodies = this.element.getElementsByTagName('div')
    }

    // 获取蛇头的坐标
    get X() {
        return this.head.offsetLeft
    }
    get Y() {
        return this.head.offsetTop
    }

    //设置蛇头坐标
    set X(value) {

        // 如果新值和旧值相同 则直接返回 不再修改
        if(this.X === value) {
            return
        }

        // 判断是否撞墙
        // X 值的合法值在0~290之间
        if(value < 0 || value > 290){
            // 进入判断说明蛇撞墙了 抛出一个异常
            throw new Error('蛇撞墙了，游戏结束!')
        }

        // 修改 X 时 是在修改水平坐标 蛇在左右移动 蛇在向左移动的时候 不能向右移动 反之也是
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            // 如果发生掉头 让蛇向反方向继续移动
            if(value > this.X) {
                // 本来向左 想向右走 发生掉头 继续向左
                value = this.X - 10
            } else {
                value = this.X + 10 
            }
        }
        // 移动身体
        this.moveBody()

        this.head.style.left = value + 'px'
        // 检查有没有撞到自己
        this.checkHeadBody()
    }

    set Y(value) {

        // 如果新值和旧值相同 则直接返回 不再修改
        if(this.Y === value) {
            return
        }

        if(value < 0 || value > 290){
            // 进入判断说明蛇撞墙了 抛出一个异常
            throw new Error('蛇撞墙了，游戏结束!')
        }
        
        // 修改 Y 时 是在修改垂直坐标 蛇在上下移动 蛇在向下移动的时候 不能向上移动 反之也是
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            // 如果发生掉头 让蛇向反方向继续移动
            if(value > this.Y) {
                value = this.Y - 10
            } else {
                value = this.Y + 10 
            }
        }

        // 移动身体
        this.moveBody()
        
        this.head.style.top = value + 'px'
        // 检查有没有撞到自己
        this.checkHeadBody()
    }

    // 蛇增加身体的方法
    addBody() {
        // 向 element 中添加一个 div
        this.element.insertAdjacentHTML('beforeend','<div></div>')
    }

    // 添加蛇身体移动方法
    moveBody() {
        // 将后面身体下一次 div 的位置设置为前面身体 div 的位置
        // 遍历获取所有的div
        for(let i = this.bodies.length - 1; i > 0; i--){
            // 获取前一个 div 的位置
            // js 除了以小括号 中括号开头的代码 可以不加分号
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            // 将值设置到当前 div 上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
    
    // 检查蛇头是否撞到身体 div 的方法
    checkHeadBody() {
        // 获取所有div 检查是否和蛇头坐标发生重叠
        for(let i = 1; 1 < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                // 进入判断说明蛇头撞到身体
                throw new Error('撞到自己了！游戏结束！')
            }
        }
    }
}

export default Snack