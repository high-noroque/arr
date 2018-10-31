import commentsReducer from 'reducers/comments'
import * as actions from 'actions/types'

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: actions.SAVE_COMMENT,
    payload: 'New Comment'
  }

  const newState = commentsReducer([], action)
  expect(newState).toEqual(['New Comment'])
})

it('handles actions of an unknown type', () => {
  const newState = commentsReducer([], { type: 'ARARARAR' })

  expect(newState).toEqual([])
})