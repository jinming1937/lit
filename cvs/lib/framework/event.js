define(function() {

	/**
	 * 事件处理
	 */
	function EventsPlus() {
		/**
		 * 保存事件名和事件
		 * @type {Array}
		 */
		this.eventArray = [];

		/**
		 * 触发事件
		 * @param {String} fnName
		 * @param {Object} context
		 */
		this.fire = function(fnName, context) {
			for(var i in this.eventArray) {
				if(fnName === this.eventArray[i].fnName && context.cvsName === this.eventArray[i].cvsName) {
					/* 同步转异步 */
					(function(eventObj, context) {
						window.setTimeout(function() {
							eventObj.fn(context.cvs);
						}, 0);
					}(this.eventArray[i], context));
				}
			}
		};

		/**
		 * 绑定事件
		 * @param {String} fnName
		 * @param {String} cvsName
		 * @param {Object} fnObj
		 */
		this.on = function(fnName, cvsName, fnObj) {
			this.eventArray.push({
				fnName: fnName,
				cvsName: cvsName,
				fn: fnObj
			});
		};

		/**
		 * 取消事件
		 * @param {String} fnName 事件名
		 */
		this.off = function(fnName) {
			/* 数组是引用类型，删除元素要注意 */
			for(var i=this.eventArray.length -1;i>=0;i--) {/*倒叙删除 */
				if(this.eventArray[i].fnName === fnName) {
					this.eventArray.splice(i, 1);
				}
			}
		};
	}

	return EventsPlus;
});