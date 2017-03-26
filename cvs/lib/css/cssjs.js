define(function(){
    var baseStyle = ['globalAlpha',
        'globalCompositeOperation', 
        'filter', 
        'imageSmoothingEnabled', 
        'strokeStyle', 
        'fillStyle', 
        'shadowOffsetX', 
        'shadowOffsetY', 
        'shadowBlur', 
        'shadowColor', 
        'lineWidth', 
        'lineCap', 
        'lineJoin', 
        'miterLimit', 
        'lineDashOffset', 
        'font', 
        'textAlign', 
        'textBaseline'
    ];
    var cssjs = {
        'button':{
            strokeStyle:'#FFFFFF',
            fillStyle:'#FFFFFF',
            font:'15px Georgia',
            textAlign:'center',
            textBaseline:'middle',
        },
        'move':{
            strokeStyle:"#808080",
            fillStyle:'#ff4c07'
        },
        'snake':{
            strokeStyle:"#ff4c07",
            fillStyle:"#ff4c07"
        },
        'snake-auto':{
            strokeStyle : "#f00",
            fillStyle:"#f00"
        }
    };
    return cssjs;
});
