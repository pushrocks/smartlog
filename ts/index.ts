import 'typings-global'

export registerLogger = () => {

}

export error = (logString: string) => {
    console.error(logString)
}

export info = (logString: string) => {
    console.info()
}

export log = (logString: string) => {
    console.log(logString)
}

export warn = (logString: string) => {
    console.warn(logString)
}
