// Core
import { ChangeEvent, FC, FormEvent, useState } from 'react'

// UI
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useAppDispatch } from '@/hooks/redux-hooks'
import { todoAdded } from '@/features/todos-slice'

const AddTodoForm: FC = () => {
  const [inputText, setInputText] = useState('')
  const dispatch = useAppDispatch()

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputText(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    if (inputText.length > 0) {
      dispatch(todoAdded(inputText))
      setInputText('')
    }
  }

  return (
    <form className="flex gap-4 pb-4" onSubmit={handleSubmit}>
      <Input
        placeholder="Task name"
        className="font-bold"
        value={inputText}
        onChange={handleChange}
      />
      <Button disabled={inputText.length === 0}>Add Todo</Button>
    </form>
  )
}

export default AddTodoForm
