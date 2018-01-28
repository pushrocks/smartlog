"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smartlog_classes_smartlog_1 = require("./smartlog.classes.smartlog");
exports.Smartlog = smartlog_classes_smartlog_1.Smartlog;
let defaultLogger;
exports.getDefaultLogger = () => {
    if (!defaultLogger) {
        defaultLogger = new smartlog_classes_smartlog_1.Smartlog();
    }
    return defaultLogger;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJFQUF1RDtBQUU5QyxtQkFGQSxvQ0FBUSxDQUVBO0FBRWpCLElBQUksYUFBdUIsQ0FBQztBQUVmLFFBQUEsZ0JBQWdCLEdBQUcsR0FBRyxFQUFFO0lBQ25DLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNuQixhQUFhLEdBQUcsSUFBSSxvQ0FBUSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUNELE1BQU0sQ0FBQyxhQUFhLENBQUM7QUFDdkIsQ0FBQyxDQUFDIn0=