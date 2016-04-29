define(["./static.js"],function  (StaticFn) {
	
    //================================[手柄start]================================//
    //创建手柄类（手柄按键，window） 
    function Handler(oper, window, block, preBlock) {
        this.init(oper, window, block, preBlock);
    };
    //设置手柄类的原型
    Handler.prototype = {
        constructor: Handler,
        //初始化
        init: function (oper, window, block, preBlock) {
            this.arrOper = oper.getElementsByTagName("div");/*操作按钮*/
            this.win = window;
            this.block = block;
            this.preBlock = preBlock;
            this.startIntId = 0;
            this.isStop = false;/*true 表示暂停*/
            this.tetris = document.getElementById("Tetris"),
            this.arrBlock = this.tetris.getElementsByClassName("borB");
            this.finish = false;/*true 表示结束*/
            this.gradeNum = document.getElementById("grade"),
            this.timeFlag,
            this.timeStaIntId = 0,
            this.limitTimer_H = document.getElementById("limitTimer_H"),
            this.limitTimer_H_Show = document.getElementById("limitTimer_H_Show"),
            this.val_Time = 0;
        },
        //keyDown 事件
        keyDown: function (e) {
            this.key(e, 0);
        },
        //keyPress 事件
        keyPress: function (e) {
            this.key(e, 1);
        },
        //keyUp 事件
        keyUp: function (e) {
            this.key(e, 2);
        },
        //事件 方式 调用集中营
        key: function (e, way) {
            var keyval;
            e = e || window.event;
            keyval = e.keyCode || e.which || e.charCode;
            //这里可以做循环遍历的：加个数组，保存keycode，然后在这里做循环  获取键盘的keyValue,作为参数传入
            switch (keyval) {
                case 37:
                    this.press("Left", way);
                    this.leftMove(way);
                    break;
                case 38:
                    this.press("Up", way);
                    this.upChange(way);
                    break;
                case 39:
                    this.press("Right", way);
                    this.rightMove(way);
                    break;
                case 40:
                    this.press("Down", way);
                    this.downMove(way);
                    break;
                case 82:
                    this.press("Reset", way);
                    this.resetGame(way);
                    break;
                case 83:
                    this.press("Stop", way);
                    this.doubleS("Stop", way);
                    break;
            }
        },
        //按下键盘 改变绑定的div样式
        press: function (id, way) {
            var div = this.arrOper[id];//document.getElementById(id);-------------自己都不明白自己怎么会这样用；现在明白了，id自动变为window的对象，于是可以window["id"]来查找，但是火狐会警告用标准的dg
            if (way < 1) {
                StaticFn.replaceClass(div,'bk','bkPress');
            } else if (way > 1) {
            	StaticFn.replaceClass(div,'bkPress','bk');
            }
        },
        /*检测是否可以移动*/
        checkMove: function (direction, arrMoveResult) {
            var arrBlockCo = new Array(),
                strClassList,
                coo_X,
                coo_Y,
                flag = true;
            for (var i = 0, len = this.arrBlock.length; i < len; i++) {
                arrBlockCo[i] = this.arrBlock[i].getAttribute("coordinate");
                coo_X = parseInt(arrBlockCo[i].split(',')[0]);/*获取x坐标*/
                coo_Y = parseInt(arrBlockCo[i].split(',')[1]);

                if (direction == 1 && coo_X == 9) {
                    flag = false;
                    break;
                } else if (direction == 0 && coo_X == 0) {
                    flag = false;
                    break;
                } else if (direction == 2 && coo_Y == 21 || direction == 3 && coo_Y == 21) {
                    flag = false;
                    break;
                } else if (coo_X > 0 && direction == 0 && this.tetris.children[(coo_X - 1 + 10 * coo_Y)].className.search("bkB") != -1) {
                    flag = false;
                    break;
                } else if (coo_X < 9 && direction == 1 && this.tetris.children[(coo_X + 1 + 10 * coo_Y)].className.search("bkB") != -1) {
                    flag = false;
                    break;
                } else if (coo_Y < 21 && (direction == 2 || direction == 3) && this.tetris.children[(coo_X + 10 * (coo_Y + 1))].className.search("bkB") != -1) {
                    flag = false;
                    break;
                }
            }
            return flag;
        },
        //左移
        leftMove: function (way) {
            //判断left 相对父容器，没问题
            if (way > 1) { return; }// 保留 keydown 、 keypress , 屏蔽 keyup事件，防止按一下，移动两格
            if (this.isStop) { return; }
            if (this.finish) { return; }
            if (!this.checkMove(0)) { return; }
            var indexBlock = new Array(), cooBlock = new Array(), coo_X, coo_Y;
            for (var i = 0, len = this.arrBlock.length; i < len; i++) {
                indexBlock[i] = this.arrBlock[i].getAttribute("index");
                cooBlock[i] = this.arrBlock[i].getAttribute("coordinate");
                coo_X = parseInt(cooBlock[i].split(',')[0]);
                coo_Y = parseInt(cooBlock[i].split(',')[1]);
                if (false) {
                    break;
                } else {
                	StaticFn.replaceClass(this.tetris.children[parseInt(indexBlock[i])],'borB','borW');
                	StaticFn.replaceClass(this.tetris.children[(10 * coo_Y + coo_X - 1)],'borW','borB');
                }
            }
        },
        //上， 变换
        upChange: function (way) {
            //变换方向--------未完成：完成：2015年8月12日
            //基准    ----变换后位置
            if (way >= 1 || this.isStop || this.finish) { return; }
            var bl = this.block.getPreShape();
            if (bl == 3) { return; }/*四方形不变换*/
            var indexBlock = new Array(),
                cooBlock = new Array(),
                coo_X,
                coo_Y,
                bolDirect = true,//方向
                arrMoveCoo = new Array(),/*以特定方式转向*/
                staIndex,//基准点
                checkChange = true;
            for (var i = 0, len = this.arrBlock.length; i < len; i++) {
                indexBlock[i] = this.arrBlock[i].getAttribute("index");
                cooBlock[i] = [parseInt(this.arrBlock[i].getAttribute("coordinate").split(',')[0]),
                    parseInt(this.arrBlock[i].getAttribute("coordinate").split(',')[1])];
            }
            switch (bl) {
                case 0:/*左拐*/
                    if (cooBlock[0][0] == cooBlock[1][0] && cooBlock[1][1] == cooBlock[2][1]) {
                        staIndex = 1;
                        if (cooBlock[staIndex][0] == 0 || cooBlock[staIndex][1] == 1) { checkChange = false; return; }/*变换验证*/
                        arrMoveCoo = [0, 1, 2, 3];
                    } else if (cooBlock[1][0] == cooBlock[3][0] && cooBlock[2][1] == cooBlock[3][1]) {
                        staIndex = 3;
                        if (cooBlock[staIndex][0] == 1 || cooBlock[staIndex][1] == 21) { checkChange = false; return; }
                        arrMoveCoo = [2, 3, 0, 1];
                    } else if (cooBlock[1][1] == cooBlock[2][1] && cooBlock[2][0] == cooBlock[3][0]) {
                        staIndex = 2;
                        if (cooBlock[staIndex][0] == 9 || cooBlock[staIndex][1] == 20) { checkChange = false; return; }
                        arrMoveCoo = [3, 0, 1, 2];
                    } else if (cooBlock[0][1] == cooBlock[1][1] && cooBlock[0][0] == cooBlock[2][0]) {
                        staIndex = 0;
                        if (cooBlock[staIndex][0] == 8) { checkChange = false; return; }
                        arrMoveCoo = [1, 0, 2, 3];
                    }
                    break;
                case 1:/*右拐*/
                    if (cooBlock[0][0] == cooBlock[3][0] && cooBlock[2][1] == cooBlock[3][1]) {
                        staIndex = 3;
                        if (cooBlock[staIndex][1] == 21) { checkChange = false; return; }
                        arrMoveCoo = [1, 2, 3, 0];
                    } else if (cooBlock[0][1] == cooBlock[1][1] && cooBlock[1][0] == cooBlock[2][0]) {
                        staIndex = 1;
                        if (cooBlock[staIndex][0] == 9 || cooBlock[staIndex][0] == 8) { checkChange = false; return; }
                        arrMoveCoo = [3, 2, 1, 0];
                    } else if (cooBlock[0][1] == cooBlock[2][1] && cooBlock[0][0] == cooBlock[3][0]) {
                        staIndex = 0;
                        arrMoveCoo = [2, 1, 0, 3];
                    } else if (cooBlock[1][0] == cooBlock[2][0] && cooBlock[2][1] == cooBlock[3][1]) {
                        staIndex = 2;
                        if (cooBlock[staIndex][0] == 1 || cooBlock[staIndex][0] == 0) { checkChange = false; return; }
                        arrMoveCoo = [0, 1, 2, 3];
                    }
                    break;
                case 2:/*尖*/
                    if (cooBlock[1][1] == cooBlock[2][1] && cooBlock[2][1] == cooBlock[3][1]) {
                        staIndex = 2;
                        if (cooBlock[staIndex][1] == 21) { checkChange = false; return; }
                        arrMoveCoo = [1, 0, 2, 3];
                    } else if (cooBlock[0][0] == cooBlock[2][0] && cooBlock[2][0] == cooBlock[3][0]) {
                        staIndex = 2;
                        if (cooBlock[staIndex][0] == 9) { checkChange = false; return; }
                        arrMoveCoo = [3, 1, 2, 0];
                    } else if (cooBlock[0][1] == cooBlock[1][1] && cooBlock[1][1] == cooBlock[2][1]) {
                        staIndex = 1;
                        arrMoveCoo = [2, 3, 0, 1];
                    } else if (cooBlock[0][0] == cooBlock[1][0] && cooBlock[1][0] == cooBlock[3][0]) {
                        staIndex = 1;
                        if (cooBlock[staIndex][0] == 0) { checkChange = false; return; }
                        arrMoveCoo = [0, 2, 1, 3];
                    }
                    break;
                case 4:/*长条*/
                    if (cooBlock[0][0] == cooBlock[1][0]) {
                        staIndex = 2;
                        bolDirect = false;
                        if (cooBlock[staIndex][0] == 0 || cooBlock[staIndex][0] == 9 || cooBlock[staIndex][0] == 8) { checkChange = false; return; }
                        arrMoveCoo = [0, 1, 2, 3];
                    } else {
                        staIndex = 1;
                        bolDirect = true;
                        if (cooBlock[staIndex][1] == 0 || cooBlock[staIndex][1] == 1) { checkChange = false; return; }
                        arrMoveCoo = [0, 1, 2, 3];
                    }
                    break;
                case 5:/*逆Z*/
                    if (cooBlock[0][1] == cooBlock[1][1]) {
                        staIndex = 0;
                        if (cooBlock[staIndex][1] == 0) { checkChange = false; return; }
                        arrMoveCoo = [1, 0, 2, 3];
                    } else {
                        staIndex = 1
                        bolDirect = false;
                        if (cooBlock[staIndex][0] == 0) { checkChange = false; return; }
                        arrMoveCoo = [3, 2, 1, 0];
                    }
                    break;
                case 6:/*正Z*/
                    if (cooBlock[0][1] == cooBlock[1][1]) {
                        staIndex = 1;
                        if (cooBlock[staIndex][1] == 0) { checkChange = false; return; }
                        arrMoveCoo = [3, 2, 1, 0];
                    } else {
                        staIndex = 1;
                        bolDirect = false;
                        if (cooBlock[staIndex][0] == 0) { checkChange = false; return; }
                        arrMoveCoo = [3, 1, 2, 0];
                    }
                    break;
            }
            /*变换验证*/
            for (var i = 0, len = arrMoveCoo.length; i < len; i++) {
                if (arrMoveCoo[i] == staIndex) { continue; }
                var x = cooBlock[arrMoveCoo[i]][0] - cooBlock[staIndex][0],
                    y = cooBlock[arrMoveCoo[i]][1] - cooBlock[staIndex][1];/* x、y 是向量坐标*/
                if (bolDirect) {//(-x + cooBlock[staIndex][1])>=0&&(-x + cooBlock[staIndex][1])<=20&&(y + cooBlock[staIndex][0])>=0&&(y + cooBlock[staIndex][0])<=9 &&
                    if (this.tetris.children[(10 * (-x + cooBlock[staIndex][1]) + y + cooBlock[staIndex][0])].className.search("bkB") != -1) {
                        checkChange = false;
                        break;
                    }
                } else {//(-x + cooBlock[staIndex][1]) >= 0 && (-x + cooBlock[staIndex][1]) <= 20 && (y + cooBlock[staIndex][0]) >= 0 && (y + cooBlock[staIndex][0]) <= 9 && 
                    if (this.tetris.children[(10 * (x + cooBlock[staIndex][1]) - y + cooBlock[staIndex][0])].className.search("bkB") != -1) {
                        checkChange = false;
                        break;
                    }
                }
            }
            if (!checkChange) { return; }/*变换验证*/
            /*变换*/
            for (var i = 0, len = arrMoveCoo.length; i < len; i++) {
                if (arrMoveCoo[i] == staIndex) { continue; }
                var x = cooBlock[arrMoveCoo[i]][0] - cooBlock[staIndex][0],
                    y = cooBlock[arrMoveCoo[i]][1] - cooBlock[staIndex][1];
				StaticFn.replaceClass(this.tetris.children[parseInt(indexBlock[arrMoveCoo[i]])],'borB','borW');
                if (bolDirect) {
                	StaticFn.replaceClass(this.tetris.children[(10 * (-x + cooBlock[staIndex][1]) + y + cooBlock[staIndex][0])],'borW','borB');
                } else {
                	StaticFn.replaceClass(this.tetris.children[(10 * (x + cooBlock[staIndex][1]) - y + cooBlock[staIndex][0])],'borW','borB');
                }
            }
        },
        //右移
        rightMove: function (way) {
            if (way > 1 || this.isStop || this.finish) { return; }
            if (!this.checkMove(1)) { return; }
            var indexBlock = new Array(), cooBlock = new Array(), coo_X, coo_Y;
            for (var i = this.arrBlock.length - 1; i >= 0; i--) {
                indexBlock[i] = this.arrBlock[i].getAttribute("index");
                cooBlock[i] = this.arrBlock[i].getAttribute("coordinate");
                coo_X = parseInt(cooBlock[i].split(',')[0]);
                coo_Y = parseInt(cooBlock[i].split(',')[1]);
                if (false) {
                    break;
                } else {
                	StaticFn.replaceClass(this.tetris.children[parseInt(indexBlock[i])],'borB','borW');
                	StaticFn.replaceClass(this.tetris.children[(10 * coo_Y + coo_X + 1)],'borW','borB');
                }
            }
        },
        //下移
        downMove: function (way) {
            //1、直接落下---------未采用
            //2、快速落下---------OK
            if (way > 1 || this.isStop || this.finish) { return; }
            this.setBlock(this, 2);
        },
        //重置
        resetGame: function (way) {
            if (way >= 1) { return; }
            this.win.location.href = this.win.location.href;//'../Tetris/index.html';
            //1、相当于刷新---------OK
            //2、tetris div清空，分数重置，其他也重置-------未采用
        },
        //id:html元素的id(string) ,way 键盘事件的标识(int 0 keydown,1 keypress,2 keyup)
        //开始/暂停
        doubleS: function (id, way) {
            var divStop = this.arrOper[id];
            if (this.finish) { return; } /*游戏已结束*/
            if (way === 0 && divStop.innerHTML == "stop") {
                divStop.innerHTML = "start";
                this.stopGame();
                this.isStop = true;
            } else if (way === 0 && divStop.innerHTML == "start") {
                divStop.innerHTML = "stop";
                this.startGame(this.timeFlag);
                this.isStop = false;
            }
        },
        //落方块
        setBlock: function (me, ty) {
            me = me || this;
            type = ty || 3;
            var indexBlock = new Array(), cooBlock = new Array(), coo_X, coo_Y;
            indexBlock = [me.arrBlock[0].getAttribute("index"),
                me.arrBlock[1].getAttribute("index"),
                me.arrBlock[2].getAttribute("index"),
                me.arrBlock[3].getAttribute("index")];
            cooBlock = [me.arrBlock[0].getAttribute("coordinate"),
                me.arrBlock[1].getAttribute("coordinate"),
                me.arrBlock[2].getAttribute("coordinate"),
                me.arrBlock[3].getAttribute("coordinate")];
            if (!me.checkMove(type)) {
                for (var i = 0, len = indexBlock.length; i < len; i++) {/*固定已经落下的块*/
               		StaticFn.replaceClass(me.tetris.children[parseInt(indexBlock[i])],'borB','borB_P bkB');
                }
                //=========[消除处理 start]=========//
                me.listenBlock(cooBlock);
                //=========[消除处理 end]=========//

                //==========[增加块 start]=========//
                if (!me.checkAddBlock(me.preBlock.getPreShape())) { return; }/*检测是否可以增加块*/
                me.block.createBlock(me.preBlock.getPreShape());/*屏幕里面的块增加一个预告块形状一样的块*/
                me.preBlock.changeBlock();/*预告块改变形状*/
                //==========[增加块 end]=========//
                return;
            }
            for (var j = me.arrBlock.length - 1; j >= 0; j--) {/*下移*/
                coo_X = parseInt(cooBlock[j].split(',')[0]);
                coo_Y = parseInt(cooBlock[j].split(',')[1]);
                if (false) {
                    break;
                } else {
                	StaticFn.replaceClass(me.tetris.children[parseInt(indexBlock[j])],'borB','borW');
                	StaticFn.replaceClass(me.tetris.children[(10 * (coo_Y + 1) + coo_X)],'borW','borB')
                }
            }
        },
        //检测是否增加块 返回true表示可以增加
        checkAddBlock: function (thisShape) {
            var flag = true;
            switch (thisShape) {
                case 0:
                case 1:
                case 2:
                    if (this.tetris.children[14].className.search("bkB") != -1 ||
                        this.tetris.children[15].className.search("bkB") != -1 ||
                        this.tetris.children[16].className.search("bkB") != -1) {
                        flag = false;
                    }
                    break;
                case 3:
                case 6:
                    if (this.tetris.children[15].className.search("bkB") != -1 ||
                        this.tetris.children[16].className.search("bkB") != -1) {
                        flag = false;
                    }
                    break;
                case 4:
                    if (this.tetris.children[4].className.search("bkB") != -1) {
                        flag = false;
                    }
                    break;
                case 5:
                    if (this.tetris.children[14].className.search("bkB") != -1 ||
                        this.tetris.children[15].className.search("bkB") != -1) {
                        flag = false;
                    }
                    break;
            }
            if (!flag) {
                this.gameOver();
            }
            return flag;
        },
        //游戏结束
        gameOver: function () {
            this.stopGame();
            alert(" Game Over ! \n You Grade: " + this.gradeNum.innerHTML + " ! \n Use Time: " + this.limitTimer_H.value + "s !");
            this.finish = true;
        },
        //消除
        listenBlock: function (arrCooBlock) {
            var arrClearBlock = new Array(),/*记录是否有消除，以及该行Y坐标*/
                arrDownBlock = new Array(),
                max_Y,
                min_Y,
                flagClearNum = 0,
                isClear = 0,
                arrTimer;
            max_Y = Math.max(parseInt(arrCooBlock[0].split(',')[1]), parseInt(arrCooBlock[1].split(',')[1]), parseInt(arrCooBlock[2].split(',')[1]), parseInt(arrCooBlock[3].split(',')[1]));
            min_Y = Math.min(parseInt(arrCooBlock[0].split(',')[1]), parseInt(arrCooBlock[1].split(',')[1]), parseInt(arrCooBlock[2].split(',')[1]), parseInt(arrCooBlock[3].split(',')[1]));

            for (var j = 0; j < max_Y - min_Y + 1; j++) {
                flagClearNum = 0;
                for (var i = 0; i < 10; i++) {/*检测*/
                    if (this.tetris.children[10 * (max_Y - j) + i].className.search("bkB") != -1) {
                        flagClearNum++;
                    } else {
                        arrClearBlock.push({ isC: false, row: max_Y - j });
                        break;
                    }
                }
                if (flagClearNum == 10) {/*满行则消除*/
                    isClear++;
                    this.gradeNum.innerHTML = parseInt(this.gradeNum.innerHTML) + 1;
                    
                    arrClearBlock.push({ isC: true, row: max_Y - j });
                    for (var h = 0; h < 10; h++) {
                    	StaticFn.replaceClass(this.tetris.children[10 * (max_Y - j) + h],'borB_P');
                    	StaticFn.replaceClass(this.tetris.children[10 * (max_Y - j) + h],'bkB','borW');
                    }
                };
            }
            if (isClear == 0) { return; }
            /*时间槽 start*/
            arrTimer = this.limitTimer_H_Show.children;
            if (arrTimer[2].innerHTML == '09' && (parseInt(arrTimer[0].innerHTML) + 10 * isClear - 60) >= 0) {
                //alert("Unbelievable!!!");特效已经心有余而力不足
                arrTimer[2].innerHTML = '10';
                arrTimer[0].innerHTML = '00';
            } else if (arrTimer[2].innerHTML != '09' && (parseInt(arrTimer[0].innerHTML)+ 10 * isClear - 60)>=0) {
                arrTimer[2].innerHTML = '0' + (parseInt(arrTimer[2].innerHTML) + 1);
                arrTimer[0].innerHTML = (parseInt(arrTimer[0].innerHTML) + 10 * isClear - 60) > 10 ? (parseInt(arrTimer[0].innerHTML) + 10 * isClear - 60) : "0"+(parseInt(arrTimer[0].innerHTML) + 10 * isClear - 60);
                if (parseInt(arrTimer[2].innerHTML) >= 1) {
                	StaticFn.replaceClass(this.limitTimer_H_Show,'ul_red','ul_green');
                }
            } else {
                arrTimer[0].innerHTML = (parseInt(arrTimer[0].innerHTML) + 10 * isClear).toString();
            } 
            /*时间槽 end*/
            /*下降*/
            /*如果有消除 未完成:完成：时间：2015年8月13日15:26:34*/
            var coo_X, coo_Y, moveRow = 0, l = 0;
            arrDownBlock = this.tetris.getElementsByClassName("borB_P");
            for (var k = arrDownBlock.length - 1; k >= 0; k--) {
                coo_X = parseInt(arrDownBlock[k].getAttribute("coordinate").split(',')[0]);
                coo_Y = parseInt(arrDownBlock[k].getAttribute("coordinate").split(',')[1]);
                if (coo_Y > max_Y) {
                    continue;
                } else if (coo_Y <= max_Y && coo_Y >= min_Y) {
                    for (var len = arrClearBlock.length; l < len; l++) {
                        if (!arrClearBlock[l].isC && coo_Y != arrClearBlock[l].row) {/*没有消除并且该行不等于目标行coo_Y*/
                            continue;
                        } else if (arrClearBlock[l].isC) {/*该行有消除， && coo_Y!= arrClearBlock[l].row*/
                            moveRow++;
                        } else if (coo_Y == arrClearBlock[l].row) {/*该行为目标行coo_Y，则中断循环，进行下落*/
                            break;
                        }
                    }
                } else {
                    moveRow = isClear;
                }
                StaticFn.replaceClass(this.tetris.children[10 * coo_Y + coo_X],'borB_P');
                StaticFn.replaceClass(this.tetris.children[10 * coo_Y + coo_X],'bkB','borW');
                StaticFn.replaceClass(this.tetris.children[10 * (coo_Y + moveRow) + coo_X],'borW','borB_P bkB');
            }
            
        },
        //开始 timerFlag:时间间隔（int）
        startGame: function (timerFlag) {
        	var that = this;
            this.timeFlag = timerFlag;
            this.timeStaIntId = this.win.setInterval(function(){
            	that.limitTimer(that);
            }, 1000);
            this.startIntId = this.win.setInterval(function(){
            	that.setBlock(that);
            }, timerFlag);
        },
        //暂停
        stopGame: function () {
            this.win.clearInterval(this.startIntId);
            this.win.clearInterval(this.timeStaIntId);
        },
        //计时器
        limitTimer: function (me) {
            me = me || this;
            var arrTimer = me.limitTimer_H_Show.children;/*0：秒，2：分*/
            me.val_Time = me.val_Time * (-1) + 1;
            arrTimer[1].innerHTML = me.val_Time? '：':"&nbsp;"
            if (arrTimer[0].innerHTML == '00' && arrTimer[2].innerHTML != '00') {
                arrTimer[2].innerHTML = '0' + (parseInt(arrTimer[2].innerHTML) - 1);
                arrTimer[0].innerHTML = '59';
                if (arrTimer[2].innerHTML == "00") {
                	StaticFn.replaceClass(me.limitTimer_H_Show,'ul_green','ul_red');
                }
            } else if (arrTimer[0].innerHTML == '00' && arrTimer[2].innerHTML == '00') {
                me.gameOver();
            } else if (arrTimer[0].innerHTML != '00') {
                arrTimer[0].innerHTML = parseInt(arrTimer[0].innerHTML) <= 10 ? '0' + (parseInt(arrTimer[0].innerHTML) - 1) : parseInt(arrTimer[0].innerHTML) - 1;
            }
            me.limitTimer_H.value = parseInt(me.limitTimer_H.value) + 1;
        }
    };
    //================================[手柄 end]================================//
	return Handler;
});