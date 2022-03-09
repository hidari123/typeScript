// 定义表示计分盘的类
class ScorePanel {
    // score 和 level 用来记录分数和等级
    score = 0
    level = 1
    // 分数和等级所在的元素 在构造函数中 进行初始化
    scoreEle: HTMLElement
    levelEle: HTMLElement
    // 设置变量限制等级
    maxLevel: number
    // 设置变量表示多少分升一级
    upScore: number

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    // 设置加分方法
    addScore() {
        // 使分数自增
        // this.score++
        // this.scoreEle.innerHTML = this.score + ''
        this.scoreEle.innerHTML = ++this.score + ''
        // 判断分数是多少
        if(this.score % this.upScore === 0) {
            this.levelUp()
        }
    }

    // 提升等级的方法
    levelUp() {
        // 设置等级上限
        if(this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + ''
        }
    }
}

export default ScorePanel