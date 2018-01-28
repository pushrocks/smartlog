export declare type TLogLevel = "error" | "warn" | "info" | "verbose" | "debug" | "silly";
export declare class Smartlog {
    private winstonInstance;
    /**
     * enables console logging
     */
    enableConsole(): void;
    /**
     * set a minimum serverity level to log
     * @param levelArg
     */
    level(levelArg: TLogLevel): void;
    /**
     * log stuff
     * @param logLevelArg
     * @param logMessageArg
     */
    log(logLevelArg: TLogLevel, logMessageArg: string): void;
    silly(logMessageArg: string): void;
    debug(logMessageArg: any): void;
    info(logMessageArg: string): void;
    warn(logMessageArg: any): void;
    error(logMessageArg: any): void;
}
