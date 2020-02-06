declare module '*.meta' {
    interface PageInfo {
        date: string
        path: string
        title: string
    }
    const PageInfo: PageInfo
    export = PageInfo
}