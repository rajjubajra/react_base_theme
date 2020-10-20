import { BlogOneActionTypes } from './BlogOneActionTypes';

export const BlogOneActionLatest = (dataLength, pageGap) => {
  return {
    type: BlogOneActionTypes.BLOG_ONE_LATEST,
    dataLength: dataLength,
    pageGap: pageGap
  }
}

