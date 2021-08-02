import messages from './messages';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import LayersIcon from '@material-ui/icons/Layers';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CategoryTwoToneIcon from '@material-ui/icons/CategoryTwoTone';
const Data = [
    {
        number: 'first',
        text: messages.home,
        icon : <HomeTwoToneIcon/>,
        href : '/'
    },
    {
        number: 'second',
        text: messages.apps,
        icon : <LayersIcon/>,
        href : '#apps'
    },
    {
        number: 'third',
        text: messages.games,
        icon : <WhatshotIcon/>,
        href : '#games'
    },
    {
        number: 'forth',
        text: messages.categories,
        icon : <CategoryTwoToneIcon/>,
        href : '#categories'
    },
    {
        number: 'fifth',
        text: messages.search,
        icon : <SearchTwoToneIcon/>,
        href : '#search'
    }
]
export default Data;