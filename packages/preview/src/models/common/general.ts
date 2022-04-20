export interface BaseReportTabPaneProps {
  activeTab: string
  query: { [key: string]: any }
  reportSummary?: React.ReactNode
  onRefreshSummary?: () => unknown
}
