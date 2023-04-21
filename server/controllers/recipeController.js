// Make sure to store your API key in a .env file, and use process.env to access it
//
// const axios = require('axios');
// const generateRecipe = async (req, res) => {
//   try {
//     const { ingredients } = req.body;
//     const data = {
//       model: 'text-davinci-003',
//       messages: [
//         {
//           role: 'user',
//           content: `Generate a detailed cooking recipe using ONLY the following ingredients: ${ingredients}.`,
//         },
//       ],
//     };

//     const headers = {
//       'Content-Type': 'application/json',
//       Authorization:
//         'Bearer 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',
//     };

//     const response = await axios.post(
//       'https://api.openai.com/v1/chat/completions',
//       data,
//       { headers }
//     );

//     const message = response.data.choices[0].text.trim();
//     res.json({ recipe: message });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// module.exports = {
//   generateRecipe,
// };

const { Configuration, OpenAIApi } = require('openai');
const OPENAI_API_KEY = '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';

const genRecipe = async (req, res, next) => {
  try {
    const { ingredients } = req.body;
    const configuration = new Configuration({
      apiKey: OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      temperature: 1,
      max_tokens: 800,
      messages: [
        {
          role: 'user',
          content: `Generate me a detailed recipe with the name of the dish, the ingredients and the step by step instructions using these ingredients ${ingredients}. Make sure that the recipe has all the ingredients needed and very elaborate instructions and return it as a JSON object and make sure the the dish name property is ALWAYS called name, the instructions property is ALWAYS called instructions and the ingredients property is ALWAYS called ingredients. Also make sure that the elements in the arrays that you are returning are string and NOT objects`,
        },
      ],
    });
    console.log(completion.data);
    const response = completion.data.choices[0].message;

    res.locals.response = response;
    return next();
  } catch (error) {
    // Handle error
    console.error('Error generating recipe:', error);
    return res.status(500).json({ error: 'Failed to generate recipe' });
  }
};
module.exports = {
  genRecipe,
};
//
//
//
//
//
//
//
//
//
//
//
//
//
//
