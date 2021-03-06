import './user.d.ts'

export interface UserItem {
  email: string
  password: string
}

export interface TagsData {
  id: string
  name: string
  type: string
  __v?: any
  _id?: string
}

export interface InterfaceData {
  code: number
  data: any
}

export interface RouterData {
  name: string
  path: string
}

export interface ArticleClassData {
  name: string
  id: string | number
  desc: string
  _id?: string
  _v?: string
}

export interface ArticleData {
  title: string
  img: string | any
  content: string
  tagName: any
  tagId: any
  author?: string
  categoryName: string
  categoryId: string
  abstract: string
  contentMD: string
  updateTime?: string
  createdTime?: string
  id: any
  isUpdate?: boolean
}

export interface HeaderName {
  label: string
  jump: string
}

export interface ArticleClass {
  label: string
  icon: string
  content: any
}

export interface ArticleTitle {
  title: string
  _id: string
}
export interface Configuration {
  strings: string[]
  typeSpeed: number
  backSpeed: number
  startDelay: number
  backDelay: number
  loop: boolean
  showCursor: boolean
  placeholder: boolean
  disableBackTyping: boolean
  cursorChar: string
}

declare module 'vue/types/vue' {
  export interface Vue {
    $util: any
    $api: any
    $lo: any
  }
}

// tslint:disable-next-line:no-namespace
declare namespace myLib {
  export interface ArticleTitle {
    title: string
    _id: string
  }
}

// export declare const Types: (ArticleTitle: ArticleTitle) => void;
