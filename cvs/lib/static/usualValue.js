define(function(){
	//static
	//trigonometric function
	function MathPlugs (){
		this.sin = function(angle){
			var val ;
			if(typeof angle ===  "number" && angle >=0 && angle <=180){
				switch(angle){
					case 0 :
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
			}else{
				throw("not a vilible number!");
			}
			return val;
		}
		this.cos = function(angle){
			var val ;
			if(typeof angle ===  "number" && angle >=0 && angle <=180){
				switch(angle){
					case 0 :
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
			}else{
				throw("not a number!");
			}
			return val;
		}
		this.tan = function(angle){
			var val ;
			if(typeof angle ===  "number" && angle >0 && angle <90){
				switch(angle){
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
			}else{
				throw("not a avilible number!");
			}
			return val;
		}
	};
	var StaticValue = {
		MathPlugs : new MathPlugs(),
	}

	/* 挂载到全局 */
	window.StaticValue = StaticValue;

	return new MathPlugs();
});