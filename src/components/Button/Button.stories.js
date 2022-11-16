import { action } from '@storybook/addon-actions'

import { Button } from './index'

export default {
  component: Button,
  title: 'Button',
  excludeStories: /.*Data$/,
}

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
}

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
}

export const Default = () => <Button task={{ ...taskData }} {...actionsData} />

export const Pinned = () => (
  <Button task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />
)

export const Archived = () => (
  <Button task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />
)
