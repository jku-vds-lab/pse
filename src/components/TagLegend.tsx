import ReactTooltip from 'react-tooltip';
import { categoryToColorEnum, categoryToDescriptionEnum } from '../modules/Tags';
import '../styles/TagLegend.css';

// get list of categories of tags
const categoryList = Object.keys(categoryToColorEnum).filter((item) => {
    return isNaN(Number(item));
  });

function Legend() {
    return (
        <div className='text-center'>
          {categoryList.map((cat: string, idx: number) => <span key={idx} role="button" data-tip={categoryToDescriptionEnum[cat as keyof typeof categoryToDescriptionEnum]} className={`tag-legend-item badge rounded-pill me-4 mb-2 bg-${categoryToColorEnum[cat as keyof typeof categoryToColorEnum]} ${categoryToColorEnum[cat as keyof typeof categoryToColorEnum] === 'light' ? "text-dark" : ""}`} >{cat}</span>)}
          <ReactTooltip place="top" type="dark" effect="solid" multiline={true}/>
        </div>
    )
}

export default Legend;