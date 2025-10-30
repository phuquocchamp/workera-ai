import { MCPClient } from "@mastra/mcp";
 
export const googleMeetMCPTool = new MCPClient({
  id: "google-meet-mcp-tool",
  servers: {
    google_meet: {
      command: "npx",
      args: ["-y", "wikipedia-mcp"]
    },
    weather: {
      url: new URL(`https://server.smithery.ai/@smithery-ai/national-weather-service/mcp?api_key=${process.env.SMITHERY_API_KEY}`)
    },
  }
});