define(function() {
	function EventsPlus() {
		this.eventArray = [];

		/**
		 * 触发事件
		 * @param {String} fnName
		 * @param {Object} context
		 */
		this.fire = function(fnName, context) {
			for(var i in this.eventArray) {
				if(fnName === this.eventArray[i].fnName && context.cvsName === this.eventArray[i].cvsName) {
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
			var _arr = [].concat(this.eventArray);
			for(var i in _arr) {
				if(_arr[i].fnName === fnName) {
					this.eventArray.splice(i, 1);
				}
			}
		};
	}

	return EventsPlus;
});