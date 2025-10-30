import { Composio } from '@composio/core';
import { MastraProvider } from '@composio/mastra';

export const composio = new Composio({
  // apiKey: process.env.COMPOSIO_API_KEY,
  provider: new MastraProvider(),
});

const userId = 'user_12345';

export const tools = await composio.tools.get(userId, {
  toolkits: ["GOOGLE_MEET"]
});
