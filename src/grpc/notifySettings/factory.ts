import { Api } from 'telegram'

export const mute = new Api.InputPeerNotifySettings({
  silent: true
})

export const unMute = new Api.InputPeerNotifySettings({
  muteUntil: 0
})
