import { date as ComputerOrganization_data, title as ComputerOrganization_title, path as ComputerOrganization_path } from '@src/pages/ComputerOrganization/index.meta'
import { p, section} from '@src/components/@write'
import { link } from '@src/components/@page/link'
const title = 'INDEX'
const page = section(title)(
    section('@books')(
        p`${link`${ComputerOrganization_title}`(ComputerOrganization_path)} ${ComputerOrganization_data}`,
    )
).elem
