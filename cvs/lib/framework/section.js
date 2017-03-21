define([
    "./event"
],function(events){
    function Section(config){
        events.call(this);
        this.sectionName = config.sectionName;
        this.callBack = config.callBack;
    }

    return Section;
});