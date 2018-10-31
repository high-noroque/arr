import * as actions from 'actions/types'

export function saveComment(comment) {
  return {
    type: actions.SAVE_COMMENT,
    payload: comment
  }
}