import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://Intelliform_owner:SJQvj90NqGie@ep-square-sun-a5o9oydv.us-east-2.aws.neon.tech/Intelliform?sslmode=require',
  }
});
