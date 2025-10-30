
import { DefaultExporter } from '@mastra/core/ai-tracing';
import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { PostgresStore } from '@mastra/pg';
import { jobDescriptionAnalyzerAgent } from './agents/employer/job-description-analyzer-agent';
import { interviewSchedulerAgent } from './agents/employer/interview-scheduler-agent';


// Initialize Vector Database
const pgStorage = new PostgresStore({
  connectionString: process.env.DATABASE_URL,
})


export const mastra = new Mastra({
  workflows: {  },
  agents: { jobDescriptionAnalyzerAgent, interviewSchedulerAgent },
  storage: pgStorage,
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'info',
  }),
  telemetry: {
    // Telemetry is deprecated and will be removed in the Nov 4th release
    enabled: false, 
  },
  observability: {
    // Enables DefaultExporter and CloudExporter for AI tracing
    default: {
      enabled: true
    }
  },
});
  