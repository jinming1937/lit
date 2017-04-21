/**
 * 
 */
function History() {

}

/**
 * 
 */
History.prototype.addHistory = function() {

};

/**
 * 增加历史
 * @param  {[type]} data  [description]
 * @param  {[type]} title [description]
 * @param  {[type]} _url  [description]
 * @return {[type]}       [description]
 */
History.prototype.pushState = function(data, title, _url) {
    history.pushState(data, title, _url);
};

module.exports = new History();