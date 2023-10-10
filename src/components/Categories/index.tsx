type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

const Categories = ({ categories, selected, onClick }: Props) => {
  return (
    <section>
      <h2>Category</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
