import { resolve } from "path"

import { config } from "dotenv"

export const loadEnv = () => config({ path: resolve(__dirname, "../../.env") })

