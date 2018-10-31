import React from 'react'
import { mount } from 'enzyme'
import Root from 'Root'
import CommentList from 'components/CommentList/index'

let wrapped

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  }

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})

it('creates one LI element per comment', () => {
  expect(wrapped.render().text()).toContain('Comment 1')
  expect(wrapped.render().text()).toContain('Comment 1')
})