#  结构

>* 元素继承结构<br/>

    inherit.js { inheritPrototype ： 提供继承 } 
        |
    watch.js { Watch & inherit ： 事件监视（addWatching, removeWatching, fire） }
        ||
    action.js { Action & inherit : 提供可触发的事件类型 }
        ||
    elementAction.js { ElementAction & inherit }
        ||
    element.js { Ele & inherit }
        ||
    canvasElement.js { CanvasElement & inherit ：承接样式，与Frame结合 }
        ||
    tool/*.js { * & inherit }

>* 样式注入<br/>

    cssjs.js { cssjs(Object) : 基础css样式，应分离到业务中去 }
        |
    style.js { 
        Style(constructor) & setStyle(Function) & baseStyle : 
        与cssjs中定义的样式结合，并生效到传入的context中 
    }
        |
    canvasElement.js { style: new Style(className) ：以style属性关联cssjs中定义的样式 }

>* 元素与Frame结合,并处理路由转场<br/>

                 ---------- event.js { fire on off } 
                /
                 ---------- router.js { 路由 }
        core.js { 初始化router, frame, tween }
                 ---------- frame.js { 初始化Frame，与dom ,canvas相结合 }
                \
                 ---------- tween.js { 处理转场动画 }

>* requestAnimationFrame 定时器

        animation.js { setAnimation | clearAnimation : 提供定时器类  }
            |
        proj/*.js { new Aniamtion() 使用定时器实例 }

>* 网络：ajax

    server/server.js { server }

>* tool/*.js { 常用图形 }
>* outer/*.js { 辅助工具 }
>* sass/*.scss { 基础样式 }
