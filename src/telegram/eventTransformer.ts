import {Api} from "telegram";

function prepare(obj: any) {
    obj.eventName = obj.className
    return obj
}

export const transformEvent = (obj: Api.TypeUpdate): Map<string, string> => {
    return transform(prepare(obj))
}

function keyIsForbidden(key: string): boolean {
    return [
        'originalArgs',
        'classType',
        'className',
        'CONSTRUCTOR_ID',
        'SUBCLASS_OF_ID'
    ].includes(key)
}

const transform = (obj: object): Map<string, string> => {
    const myMap = new Map<string, string>();

    for (const key in obj) {
        if (keyIsForbidden(key)) {
            continue
        }
        const value = obj[key];

        if (!obj.hasOwnProperty(key)) {
            continue
        }

        if (typeof value === 'object') {
            const valueMap = transform(value)

            valueMap.forEach((innerValue, innerKey) => {
                myMap.set(key + '.' + innerKey, innerValue)
            })
        } else if (value === undefined) {
            myMap.set(key, '')
        } else {
            myMap.set(key, value.toString())
        }
    }

    return myMap
}
