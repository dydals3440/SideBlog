type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

const Categories = ({ categories, selected, onClick }: Props) => {
  return (
    <section className='text-center p-4'>
      <h2 className='text-lg font-bold border-b border-green-500 mb-2'>
        Category
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            className={`cursor-pointer hover:text-pink-500 ${
              category === selected && 'text-pink-600'
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
