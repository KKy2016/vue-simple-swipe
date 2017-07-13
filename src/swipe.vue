<template>
    <div class="swipe-container">
        <div class="swipe-item-container">
            <slot></slot>
        </div>
        <div class="swipe-indicators" v-if="indicator">
            <div class="swipe-indicator" v-for="(item, index) in pages" :key="item.id" :class="{'active': (index == current)}"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               ready: false,
               width: 0,
               current: 0,
               pages: [],
               autoTimer: null,
               reInitPageTimer: null,
               posX: 0,
               posX_move: 0,
               animating: false
            }
        },

        props: {
            speed: {
                type: Number,
                default: 300
            },

            auto: {
                type: Number,
                default: 3000
            },

            indicator: {
                type: Boolean,
                default: true
            }
        },

        methods: {
            init() {
                this.initPages()
                // 自动播放
                if (this.auto > this.speed) this.autoPlay()

                // 滑动
                let el = this.$el 
                el.addEventListener('touchstart', (ev) => {
                    this.doTouchStart(ev)
                }, false)
                el.addEventListener('touchmove', (ev) => {
                    this.doTouchMove(ev)
                }, false)
                el.addEventListener('touchend', () => {
                    this.doTouchEnd()
                }, false)
            },
            doTouchStart(ev) {
                if (this.animating) return

                clearInterval(this.autoTimer)

                let index = this.current,
                    pages = this.pages,
                    width = this.width,
                    len = pages.length,
                    current = pages[index],
                    prev = pages[index-1],
                    next = pages[index+1]

                if (!prev) prev = pages[len-1]
                if (!next) next = pages[0]

                prev.style.display = 'block'
                next.style.display = 'block'
                this.translate(prev, -width)
                this.translate(next, width)

                // 记录下落点位置
                this.posX = ev.touches[0].pageX
            },
            doTouchMove(ev) {
                if (this.animating) return

                let posX_move = ev.touches[0].pageX,
                    offset = posX_move - this.posX,
                    index = this.current,
                    pages = this.pages,
                    width = this.width,
                    len = pages.length,
                    current = pages[index],
                    prev = pages[index-1],
                    next = pages[index+1]

                this.posX_move = posX_move

                if (!prev) prev = pages[len-1]
                if (!next) next = pages[0]
                
                this.translate(current, offset)
                if (offset > 0) {
                    this.translate(prev, -(width - offset))
                } else {
                    this.translate(next, width + offset)
                }
            },
            doTouchEnd() {
                if (this.animating) return

                let posX_end = this.posX_move,
                    offset = posX_end - this.posX,
                    absOffset = Math.abs(offset),
                    index = this.current,
                    pages = this.pages,
                    width = this.width,
                    len = pages.length,
                    current = pages[index],
                    prev = pages[index-1],
                    next = pages[index+1],
                    speed = this.speed

                if (!prev) prev = pages[len-1]
                if (!next) next = pages[0]

                let callback = (dir) => {
                    return () => {
                        let current = this.current
                        current = current + dir
                        this.current = current >= 0 ? (current % len) : (len + current % len)

                        this.autoPlay()
                    }
                }

                if (absOffset > width / 3) {
                    if (offset > 0) {
                        this.translate(current, width, speed)
                        this.translate(prev, 0, speed, callback(-1))
                    } else {
                        this.translate(current, -width, speed)
                        this.translate(next, 0, speed, callback(1))
                    }
                } else {
                    this.translate(current, 0, speed)
                    if (offset > 0) {
                        this.translate(prev, -width, speed, callback(0))
                    } else {
                        this.translate(next, width, speed, callback(0))
                    }
                }
            },
            // 获取item
            initPages() {
                this.pages = []

                let childRen = this.$children
                childRen.forEach(child => {
                    this.pages.push(child.$el)
                })
                console.log(this.current)
                this.classAssign()
            },
            autoPlay() {
                clearInterval(this.autoTimer)

                this.autoTimer = setInterval(() => {
                    this.next()
                }, this.auto)
            },
            next() {
                let index = this.current,
                    pages = this.pages,
                    len = pages.length,
                    width = this.width,
                    speed = this.speed,
                    current = pages[index],
                    next = pages[index+1]

                if (!next) next = pages[0]

                next.style.display = 'block'
                this.translate(next, width)

                var callback = () => {
                    let current = this.current
                    current++
                    this.current = current % (this.pages.length)

                    this.classAssign()
                }

                setTimeout(() => {
                    this.translate(current, -width, speed)
                    this.translate(next, 0, speed, callback)
                }, 10)

            },
            classAssign() {
                this.pages.forEach((page, index) => {
                    if (index == this.current) {
                        page.classList.add('active')
                        page.style.display = 'block'
                        page.style.webkitTransform = 'translateX(0)'
                    } else {
                        page.style.display = 'none'
                        page.style.webkitTransform = 'translateX(-100%)'
                        page.classList.remove('active')
                    }
                })
            },
            translate(target, offset, speed, callback) {
                if (speed) {
                    this.animating = true

                    target.style.webkitTransition = '-webkit-transform ' + speed + 'ms ease-in-out'
                    // 注意这里
                    setTimeout(() => {
                        target.style.webkitTransform = `translate3d(${offset}px, 0, 0)`
                    }, 50)

                    // 一定要移除监听事件
                    let fn = () => {
                        if (callback) callback()

                        this.animating = false

                        target.removeEventListener('webkitTransitionEnd', fn, false)
                    }
                    target.addEventListener('webkitTransitionEnd', fn, false)
                } else {
                    target.style.webkitTransition = ''
                    target.style.webkitTransform = `translate3d(${offset}px, 0, 0)`
                }
            },
            reInitPage() {
                if (!this.ready) return 

                clearTimeout(this.reInitPageTimer)
                this.reInitPageTimer = setTimeout(() => {
                    this.current = 0
                    this.initPages()
                }, 100)
            }
        },

        mounted() {
            this.ready = true
            this.width = this.$el.clientWidth
            this.init()
        }
    }
</script>
