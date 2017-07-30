import { todos } from './client'

export default async ({
  title,
  createdAt,
  description,
  priority,
  tags,
  done = false,
  power_level = 0,
}) => {
  await todos.newDocument().mutate({
    title,
    description,
    createdAt,
    priority,
    tags,
    done,
    power_level,
  })
}
