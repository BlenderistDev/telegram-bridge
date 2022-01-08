import { Api } from 'telegram'

const MAX_MUTE_UNTIL = 2147483647

export const mute = new Api.InputPeerNotifySettings({
  silent: true,
  muteUntil: MAX_MUTE_UNTIL // for chat mute
})

export const unMute = new Api.InputPeerNotifySettings({
  muteUntil: 0
})
