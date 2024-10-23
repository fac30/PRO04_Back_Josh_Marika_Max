import { supabase } from "./supabaseClient"
import { readFileSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = join(__filename, '..')

const runSqlFiles = async (filePaths: string[]) => {
  for (const filePath of filePaths) {
    const query = readFileSync(join(__dirname, filePath), 'utf-8')
    await supabase.rpc('sql', { query })
  }
}

const sqlFiles = [
    './schema/drop.sql',
    './schema/schema.sql',
    './schema/categories.sql',
    './schema/triggers.sql',
    './schema/vinyls.sql'
]

runSqlFiles(sqlFiles)