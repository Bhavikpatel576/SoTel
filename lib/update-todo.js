import { todos } from './client'
import { datas } from './client'

export default async (id, update) => {
  await todos.document(id).merge(update)
  await datas.document(id).merge(update)
}
