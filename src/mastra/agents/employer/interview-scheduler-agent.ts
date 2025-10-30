import { Agent } from "@mastra/core/agent";
import { tools } from "../../mcps/composio";

export const interviewSchedulerAgent = new Agent({
  id: "interview-scheduler-agent",
  name: "Interview Scheduler Agent",
  instructions: "You think therefore you are",
  model: "openai/gpt-4o-mini",
  tools: tools,
})