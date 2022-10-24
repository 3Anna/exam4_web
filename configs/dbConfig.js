const dotenv = require('dotenv');
const { createClient } = require('@supabase/supabase-js');
//import { createClient } from '@supabase/supabase-js'; 

dotenv.config(); 

const supabaseUrl = process.env.SUPABASE_URL; //передаем ссылку
const supabaseKey = process.env.SUPABASE_KEY; //передаем ключ
const supabase = createClient(supabaseUrl, supabaseKey); 

module.exports = {supabase};
