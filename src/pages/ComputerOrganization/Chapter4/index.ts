import { section, p } from '@src/components/@write'
import { date as date_1, path as path_1, title as title_1 } from './1.meta'
import { date as date_2, path as path_2, title as title_2 } from './2.meta'
import { date as date_3, path as path_3, title as title_3 } from './3.meta'
import { date as date_4, path as path_4, title as title_4 } from './4.meta'
import { date as date_5, path as path_5, title as title_5 } from './5.meta'
import { date as date_6, path as path_6, title as title_6 } from './6.meta'
import { link } from '@src/components/@page/link'
export default section(('Chapter 4 程序的链接'))(
    p`${link`${title_1}`(path_1)} ${date_1}`,
    p`${link`${title_2}`(path_2)} ${date_2}`,
    p`${link`${title_3}`(path_3)} ${date_3}`,
    p`${link`${title_4}`(path_4)} ${date_4}`,
    p`${link`${title_5}`(path_5)} ${date_5}`,
    p`${link`${title_6}`(path_6)} ${date_6}`
)
