import { generateClasses } from '@formkit/themes'

export default {
  config: {
    classes: generateClasses({
      submit: {
        input: 'form__button'
      },
    })
  }
}