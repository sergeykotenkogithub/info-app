export type { ScrollSaveSchema } from './model/types/ScrollSave'

export { getScrollSaveByPath } from './model/selectors/scrollSave'
export {
  scrollSaveActions,
  scrollSaveReducer,
} from './model/slices/ScrollSaveSlice'
