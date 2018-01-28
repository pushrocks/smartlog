"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartlog.plugins");
class Smartlog {
    constructor() {
        this.winstonInstance = new plugins.winston.createLogger({
            level: 'silly',
            format: plugins.winston.format.json()
        });
    }
    // ============
    // Logger Setup
    // ============
    /**
     * enables console logging
     */
    enableConsole() {
        this.winstonInstance.add(new plugins.winston.transports.Console());
    }
    /**
     * set a minimum serverity level to log
     * @param levelArg
     */
    level(levelArg) {
        this.winstonInstance.level(levelArg);
    }
    // =============
    // log functions
    // =============
    /**
     * log stuff
     * @param logLevelArg
     * @param logMessageArg
     */
    log(logLevelArg, logMessageArg) {
        this.winstonInstance.log(logLevelArg, logMessageArg);
    }
    silly(logMessageArg) {
        this.log('silly', logMessageArg);
    }
    debug(logMessageArg) {
        this.log('debug', logMessageArg);
    }
    info(logMessageArg) {
        this.log('info', logMessageArg);
    }
    warn(logMessageArg) {
        this.log('warn', logMessageArg);
    }
    error(logMessageArg) {
        this.log('error', logMessageArg);
    }
}
exports.Smartlog = Smartlog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRsb2cuY2xhc3Nlcy5zbWFydGxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0bG9nLmNsYXNzZXMuc21hcnRsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBOEM7QUFVOUM7SUFBQTtRQUNVLG9CQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUN6RCxLQUFLLEVBQUUsT0FBTztZQUNkLE1BQU0sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7U0FDdEMsQ0FBQyxDQUFBO0lBb0RKLENBQUM7SUFsREMsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0lBRWY7O09BRUc7SUFDSCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLLENBQUUsUUFBbUI7UUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCOzs7O09BSUc7SUFDSCxHQUFHLENBQUMsV0FBc0IsRUFBRSxhQUFxQjtRQUMvQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUE7SUFDdEQsQ0FBQztJQUVELEtBQUssQ0FBQyxhQUFxQjtRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsS0FBSyxDQUFDLGFBQWE7UUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUVELElBQUksQ0FBQyxhQUFxQjtRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRUQsSUFBSSxDQUFDLGFBQWE7UUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVELEtBQUssQ0FBQyxhQUFhO1FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7Q0FDRjtBQXhERCw0QkF3REMifQ==