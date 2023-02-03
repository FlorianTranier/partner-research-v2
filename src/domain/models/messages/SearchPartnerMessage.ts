import MessageType from './enums/MessageType'

export default class SearchPartnerMessage {
  serverId: string
  messageId: string
  authorId: string
  game: string
  type: MessageType
  membersId: string[]
  lateMembersId: string[]
  notifiedMembersId: string[]
  channelId: string
  bgImg: string
  timestamp: number

  constructor(p: {
    serverId: string
    messageId: string
    authorId: string
    game: string
    type: MessageType
    membersId: string[]
    lateMembersId: string[]
    notifiedMembersId?: string[]
    channelId: string
    bgImg: string
    timestamp?: number
  }) {
    this.serverId = p.serverId
    this.messageId = p.messageId
    this.authorId = p.authorId
    this.game = p.game
    this.type = p.type
    this.membersId = p.membersId
    this.lateMembersId = p.lateMembersId
    this.channelId = p.channelId
    this.notifiedMembersId = p.notifiedMembersId ?? []
    this.bgImg = p.bgImg
    this.timestamp = p.timestamp ?? new Date().getTime()
  }
}
