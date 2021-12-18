import * as fs from "fs";

export const loadSession = (): string => {
    try {
        return fs.readFileSync('./session').toString()
    } catch {
        return ""
    }
}

export const saveSession = (session: string) => {
    return fs.writeFileSync('./session', session)
}
