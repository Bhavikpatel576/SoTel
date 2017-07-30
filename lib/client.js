import rapid from 'rapid-io'

const API_KEY = 'NDA1OWE0MWo1b3AzYnphLnJhcGlkLmlv'

const RAPID_TODO_COLLECTION_NAME = 'bpatel576' // Add your collection name right here
const RAPID_TODO_COLLECTION_NAME_TWO = 'celltower' // Add your collection name right here

const client = rapid.createClient(API_KEY)

export default client
export const todos = client.collection(RAPID_TODO_COLLECTION_NAME)
export const datas = client.collection(RAPID_TODO_COLLECTION_NAME_TWO)