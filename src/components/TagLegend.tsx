import { categoryToColorEnum } from '../modules/Tags';

// get list of categories of tags
const categoryList = Object.keys(categoryToColorEnum).filter((item) => {
    return isNaN(Number(item));
  });

function Legend() {
    return (
        <div className='text-center'>
          {categoryList.map((cat: string, idx: number) => <span key={idx} className={`badge rounded-pill me-4 mb-2 bg-${categoryToColorEnum[cat as keyof typeof categoryToColorEnum]} ${categoryToColorEnum[cat as keyof typeof categoryToColorEnum] === 'light' ? "text-dark" : ""}`} >{cat}</span>)}
        </div>
    )
}

export default Legend;