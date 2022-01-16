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
          {categoryList.map((cat: string, idx: number) => 
          <span key={idx}>
            <span key={idx} role="button" data-for={cat} data-tip={categoryToDescriptionEnum[cat as keyof typeof categoryToDescriptionEnum]} className={`tag-legend-item badge rounded-pill me-3 bg-${categoryToColorEnum[cat as keyof typeof categoryToColorEnum]} ${categoryToColorEnum[cat as keyof typeof categoryToColorEnum] === 'light' ? "text-dark" : ""}`} >{cat}</span>
            <ReactTooltip id={cat} type="dark" effect="solid" multiline={true} />
          </span>
          )}
        </div>
    )
}

export default Legend;