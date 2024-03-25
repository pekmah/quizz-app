interface Category {
  id: number;
  name: string;
}

type FetchCategories = () => Promise<Category[]>;
