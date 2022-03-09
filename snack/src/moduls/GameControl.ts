import Snack from "./Snack"
import Food from "./Food"
import ScorePanel from "./ScorePanel"

// 游戏控制类
class GameControl {
    // 定义三个属性
    snack: Snack
    food: Food
    scorePanel: ScorePanel
    // 创建一个属性来存储蛇的移动方向（按键的方向）
    direction: string = ''
    // 创建一个属性 用来记录游戏是否结束
    isLive: boolean = true

    constructor() {
        this.snack = new Snack()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.init()
    }

    // 游戏的初始化方法 调用后游戏开始
    init() {
        // 绑定键盘按键按下的事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        // 调用 run 方法
        this.run()
    }

    // 创建一个键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        // 检查用户是否按了正确的按键
        // 修改 direction 属性
        this.direction = event.key
    }

    // 创建一个让蛇移动的方法
    run() {
        // 根据方向 this.direction 来使蛇的位置改变
        /**
         * 向上：top减少
         * 向下：top增加
         * 向左：left减少
         * 向右：left增加
         */
        // 获取蛇现在坐标
        let X = this.snack.X
        let Y = this.snack.Y

        // 根据按键修改 X 和 Y 值
        switch(this.direction) {
            case 'ArrowUp':
            case 'Up':
                // 向上 
                Y -= 10
                break
            case 'ArrowDown':
            case 'Down':
                // 向下
                Y += 10
                break
            case 'ArrowRight':
            case 'Right':
                // 向右
                X += 10
                break
            case 'ArrowLeft':
            case 'Left':
                // 向左
                X -= 10
                break
        }

        // 检查蛇是否吃到了食物
        this.checkEat(X, Y)

        // 修改蛇的 X 和 Y 值
        try {
            // 修改蛇的 X 和 Y
            this.snack.X = X
            this.snack.Y = Y
        } catch (e) {
            // 进入 catch 说明出现异常 游戏结束 弹出提示信息
            const u = e as Error
            alert(u.message)
            // 将 isLive 设为 false
            this.isLive = false
        }
        // 开启一个定时器调用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    }

    // 定义一个方法 用来检查蛇是否吃到食物
    checkEat(X: number, Y: number) {
        if(X === this.food.X && Y === this.food.Y) {
            // 食物位置改变
            this.food.change()
            // 分数增加
            this.scorePanel.addScore()
            // 蛇增加一截
            this.snack.addBody()
        }
    }
}
export default GameControl