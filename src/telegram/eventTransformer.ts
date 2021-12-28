import { Api } from 'telegram'

interface TelegramEvent {
  name: string;
  data: {[k: string]: string}
}

function prepare (obj: any) {
  obj.eventName = obj.className
  return obj
}

export const transformEvent = (obj: Api.TypeUpdate): TelegramEvent => {
  return {
    name: obj.className,
    data: Object.fromEntries(transform(prepare(obj)))
  }
}

function keyIsForbidden (key: string): boolean {
  return [
    'originalArgs',
    'classType',
    'className',
    'CONSTRUCTOR_ID',
    'SUBCLASS_OF_ID'
  ].includes(key)
}

const transform = (obj: object): Map<string, string> => {
  const myMap = new Map<string, string>()

  for (const key in obj) {
    if (keyIsForbidden(key)) {
      continue
    }
    const value = obj[key]

    if (!Object.prototype.hasOwnProperty.call(obj, key)) {
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
