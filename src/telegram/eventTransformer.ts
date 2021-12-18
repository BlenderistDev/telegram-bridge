export const transform = (obj: object): Map<string, string> => {
    const myMap = new Map<string, string>();

    for (const key in obj) {
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
