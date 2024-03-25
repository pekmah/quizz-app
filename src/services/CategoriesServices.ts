import AxiosUtility from './AxiosServices.ts';

export const fetchCategories = async (): Promise<Category[]> => {
  const {data} = await AxiosUtility.get('/categories');

  return data;
};
