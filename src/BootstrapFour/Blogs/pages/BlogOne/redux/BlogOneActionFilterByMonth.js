import { BlogOneActionTypes } from './BlogOneActionTypes';

export const BlogOneActionFilterByMonth = (year, month) => (
  {
    type: BlogOneActionTypes.BLOG_ONE_FILTER_BY_MONTH,
    year: year,
    month: month
  }
)


