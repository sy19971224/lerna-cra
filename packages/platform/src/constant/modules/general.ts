/**
 * @description 业务通用常量
 */
export enum EXPORT_TYPE {
  Video = 1,
  User = 2,
  Like = 3,
  Follow = 4,
  Comment = 5,
  Reply = 6,
  Music = 7,
  ReportUser = 8,
  ReportMusic = 9,
  ReportVideo = 10,
  ReportComment = 11,
  VideoQCPending = 12,
  SupplyVideoQCPending = 13,
  VideoQcUpload = 14,
  SupplyVideoQcUpload = 15,
  ReportVideoUpload = 16,
  ReportVideoCompleted = 17,
  VideoQCCompleted = 18,
  SupplyVideoQCCompleted = 19,
  VideoFailedMachineQcUpload = 20,
  VideoFailedMachineQcPending = 21,
  VideoFailedMachineQcCompleted = 22,
  ReportUserPending = 24,
  ReportCommentPending = 25,
  ReportMusicPending = 26,
  BotAccountList = 27,
  ReportHashtagPending = 30,
  ReportHashtagCompleted = 31,
  ReplyList = 32,
  ReportReplyPending = 33,
  ReportReplyCompleted = 34,
  PendingTrendingTopic = 35,
  CompletedTrendingTopic = 36,
  CrawlingCreatorPending = 40,
  CrawlingCreatorVerified = 41,
  CrawlPendingHashtag = 42,
  CrawlCompletedHashtag = 43,
  UserProfilePending = 46,
  UserProfileCompleted = 47,
  BotMapping = 48,
  CrawlingTopic = 50,
  CrawledTopic = 51
}

export const EXPORT_TYPE_RECORD_STATUS: Record<string, number> = {
  Success: 2,
  Failed: 3
}

export enum EXPORT_TYPE_RECORD_STATUS_COLOR {
  'success' = 2,
  'error' = 3
}

export enum UPLOAD_RECORD_TYPE {
  UgcVideo = 14,
  SupplierVideo = 15,
  ReportVideo = 16,
  MachineQcFailedVideo = 20,
  ReportUser = 27,
  ReportComment = 28,
  ReportMusic = 29,
  ReportHashtag = 30,
  ReportReply = 31,
  TrendingVideo = 32,
  CrawlUser = 36,
  CrawlHashtag = 37,
  UserProfile = 39,
  AddBotMapping = 40,
  RemoveBotMapping = 41,
  CrawlingTrendingTopic = 42
}

export enum CREATOR_PLATFORM {
  'Youtube' = 1,
  'Instagram',
  'TikTok',
  'Snack',
  'Likee'
}

export enum BOOLEAN_COLOR {
  '#a0d911' = 2,
  '#f5222d' = 3
}

export const UPLOAD_RECORD_STATUS: Record<string, number> = {
  Success: 2,
  Failed: 3
}

export enum UPLOAD_RECORD_STATUS_COLOR {
  'success' = 2,
  'error' = 3
}
