const openai = require('./openai')

// Additional prompt sets
const additionalPrompts = [
  ['anime80s', 'cute'],
  ['cinematic', 'illustration'],
  ['gold', 'cyberpunk']
]

async function generateImg (prompt) {
  try {
    // Randomly select an additional prompts set
    const additionalPromptSet = additionalPrompts[Math.floor(Math.random() * additionalPrompts.length)]
    // Add the main prompt and the additional prompts
    const prompts = [prompt, ...additionalPromptSet]

    const { data } = await openai.createImage({
      prompt: prompts.join('\n'),
      n: 1, //return more images...
      size: '1024x1024'
    })

    return data.data
  } catch (error) {
    if (error.response) {
      console.log(error.response.status)
      console.log(error.response.data)
    } else {
      console.log(error.message)
    }

    throw new Error('Error generating image')
  }
}

module.exports = { generateImg }