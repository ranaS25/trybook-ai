export const API_KEY_URL = "https://www.uuidtools.com/api/generate/v1"

export const NAV_ITEMS = [
  "Overview",
  "Authentication",
  "Endpoints",
  "Tutorial",
  "Code Examples",
  "Pricing",
];

export const OVERVIEW = {
  heading: "Overview",
  description:
    "The Book Generator API allows you to generate books on various topics using different language models. This documentation provides details on how to use the API, including authentication, available endpoints, and code examples.",
};

export const tutorialData = {
  heading: "Tutorial",
  tutorial: [
    {
      step: 1,
      title: "Obtain an API Key",
      description:
        "Generate an API key using the button in the Authentication section above.",
    },
    {
      step: 2,
      title: "Make a Request",
      description:
        "Use your preferred programming language or tool to make a POST request to the /api/generate-book endpoint. Include your API key in the header and the required parameters in the request body.",
    },
    {
      step: 3,
      title: "Handle the Response",
      description:
        "The API will return a response with a job ID. You can use this ID to check the status of your book generation job.",
    },
    {
      step: 4,
      title: "Retrieve the Generated Book",
      description:
        "Once the job is complete, you can retrieve the generated book using the job ID (endpoint to be implemented).",
    },
  ],
};


export const endpointsData = {


  heading: "Endpoints",
  tableData: {
    table_heading: ["PARAMETER", "TYPE", "DESCRIPTION"],
    table_details: [
      ["api", "string", "The API provider to use. Options: 'openai' or 'together'"],
      ["model","string", "The specific model to use (e.g., 'gpt-3.5-turbo', 'gpt-4', 'llama-2-70b')"],
      ["topic", "string", "The main topic or theme of the book"],
      ["language", "string", "The language in which the book should be generated"],
      ["word_count", "integer", "The approximate number of words for the generated book"],
    ]
  },
  response:
  `
  {
    "message": "Book generation started",
    "status": "processing",
    "job_id": "unique-job-identifier"
  }`


};



export const apiPricingData = {
  heading: "API Pricing",
  content:
    "Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:",
  api_pricing: {
    table_heading: ["API", "MODEL", "PRICE PER 1K TOKENS"],
    table_details: [
      ["OpenAI", "GPT-3.5", "$0.002"],
      ["OpenAI", "GPT-4", "$0.03"],
      ["Together AI", "Llama-2-70b","$0.0008"],
      ["Together AI","Llama-2-13b", "$0.0006"],
    ],
  },
  token_estimation: {
    title: "Token Estimation",
    description:
      "On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.",
  },
  billing: {
    title: "Billing",
    description:
      "You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.",
  },
};


export const authenticationData = {
  heading: "Authentication",
  description: "To use the API, you need to include your API key in the header of each request:",
  ApiKeyText: "X-API-Key: YOUR_API_KEY",
  instruction: "To generate an API key, use the button below:",
  buttonCTA: "Generate API Key",
  apiMessage: "Your API Key: ",
};



export const codeExamples = {
  heading: "Code Examples",
  python: {
    title: "Python",
    code: 
      `import requests

      API_KEY = "your_api_key_here"
      API_ENDPOINT = "https://tryBookAI.com/api/generate-book"

      headers = {
          "Content-Type": "application/json",
          "X-API-Key": API_KEY
      }

      data = {
          "api": "openai",
          "model": "gpt-3.5-turbo",
          "topic": "The Future of Artificial Intelligence",
          "language": "English",
          "word_count": 5000
      }

      response = requests.post(API_ENDPOINT, json=data, headers=headers)

      if response.status_code == 200:
          result = response.json()
          print(f"Book generation started. Job ID: {result['job_id']}")
      else:
          print(f"Error: {response.status_code} - {response.text}")
      `
  },
  javascript: {
    title: 'JavaScript (Node.js)',
    code:
      "change me incoorect"
  }

}