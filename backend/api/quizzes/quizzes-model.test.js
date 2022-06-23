import db from '../../data/db-config'
import { getQuiz } from './quizzes-model'

jest.setTimeout(750)

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
afterAll(async () => {
  await db.destroy()
})
beforeEach(async () => {
  await db.seed.run()
})

test('environmnet', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})
describe('getQuiz', () => {
  test('non-admin user get simplified structure', async () => {
    const expectedOptions = [
      { option_id: 1, option_text: 'The One Ring.' },
      { option_id: 2, option_text: 'Hand.' },
      { option_id: 3, option_text: 'Nothing.' },
    ]
    const expectedQuestion = {
      question_id: 1,
      question_text: "What's in Bilbo's pocket?",
    }

  })
  test('admin user gets all the fields', async () => {
    const expectedOptions = [
      { option_id: 1, option_text: 'The One Ring.', is_correct: true },
      { option_id: 2, option_text: 'Hand.', is_correct: false },
      { option_id: 3, option_text: 'Nothing.', is_correct: false },
    ]
    const expectedQuestion = {
      question_id: 1,
      question_title: "Bilbo's Pocket",
      question_text: "What's in Bilbo's pocket?",
    }

  })
})
