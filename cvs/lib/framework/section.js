var events = require("./event");

function Section(config) {
    events.call(this);
    this.sectionName = config.sectionName;
    this.callBack = config.callBack;
}

module.exports = Section;