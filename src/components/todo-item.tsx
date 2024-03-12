// Core
import { FC } from 'react'
import { useAppDispatch } from '@/hooks/redux-hooks'

// UI
import { Checkbox } from './ui/checkbox'
import { TodoItem } from '@/types/types'
import { todoToggled, todoDeleted } from '@/features/todos-slice'
import { Button } from './ui/button'
import { X } from 'lucide-react'

const TodoCard: FC<TodoItem> = ({ id, name, completed }) => {
  const dispatch = useAppDispatch()

  const toggleCompleted = (): void => {
    dispatch(todoToggled(id))
  }

  const handleDelete = (): void => {
    dispatch(todoDeleted(id))
  }

  return (
    <li className="flex w-full items-center gap-2">
      <label
        className="group/label flex grow cursor-pointer items-center
      gap-2 py-2"
      >
        <Checkbox
          checked={completed}
          onCheckedChange={toggleCompleted}
          className="opacity-70 transition-opacity
          group-hover/label:opacity-85"
        />
        <span
          className={`text-sm ${completed ? 'line-through opacity-70' : ''}`}
        >
          {name}
        </span>
      </label>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        onClick={handleDelete}
      >
        <X size={14} strokeWidth={1.75} className="opacity-70" />
      </Button>
    </li>
  )
}

export default TodoCard
