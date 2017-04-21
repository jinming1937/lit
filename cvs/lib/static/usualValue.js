//static
//trigonometric function
//常用数学公式 － 获取常用值
define(function() {
    /**
     * MathPlugs 数学对象扩展，增加方法
     */
    function MathPlugs() {
        /**
         * sin 增加精确,传入角度，而不是弧度
         * @param  {Number} angle 传入的角度值
         * @return {Number}       sin 值
         */
        this.sin = function(angle) {
            var val;
            if (typeof angle === "number" && angle >= 0 && angle <= 180) {
                switch (angle) {
                    case 0:
                        val = 0;
                        break;
                    case 30:
                        val = 1 / 2;
                        break;
                    case 45:
                        val = Math.sqrt(2) / 2;
                        break;
                    case 60:
                        val = Math.sqrt(3) / 2;
                        break;
                    case 90:
                        val = 1;
                        break;
                    default:
                        val = Math.sin(angle * Math.PI / 180);
                        break;
                }
            } else {
                throw ("not a vilible number!");
            }
            return val;
        };

        this.cos = function(angle) {
            var val;
            if (typeof angle === "number" && angle >= 0 && angle <= 180) {
                switch (angle) {
                    case 0:
                        val = 1;
                        break;
                    case 30:
                        val = Math.sqrt(3) / 2;
                        break;
                    case 45:
                        val = Math.sqrt(2) / 2;
                        break;
                    case 60:
                        val = 1 / 2;
                        break;
                    case 90:
                        val = 0;
                        break;
                    default:
                        val = Math.sin(angle * Math.PI / 180);
                        break;
                }
            } else {
                throw ("not a number!");
            }
            return val;
        };
        this.tan = function(angle) {
            var val;
            if (typeof angle === "number" && angle > 0 && angle < 90) {
                switch (angle) {
                    case 30:
                        val = Math.sqrt(3) / 3;
                        break;
                    case 45:
                        val = 1;
                        break;
                    case 60:
                        val = Math.sqrt(3);
                        break;
                    default:
                        val = Math.sin(angle * Math.PI / 180);
                        break;
                }
            } else {
                throw ("not a avilible number!");
            }
            return val;
        };
    }
    return new MathPlugs();
});