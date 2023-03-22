import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comment'
import { fetchCommentByArticleId } from '../services/fetchCommentByArticleId/fetchCommentByArticleId'
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
)

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    ids: [],
    entities: {},
    error: undefined,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentByArticleId.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(
        fetchCommentByArticleId.fulfilled,
        (state, action: PayloadAction<Comment[]>) => {
          state.isLoading = false
          commentsAdapter.setAll(state, action.payload)
        }
      )
      .addCase(fetchCommentByArticleId.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

// eslint-disable-next-line operator-linebreak
export const { reducer: articleDetailsCommentsReducer } =
  articleDetailsCommentsSlice
