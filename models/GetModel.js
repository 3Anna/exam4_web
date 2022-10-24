const { supabase } = require('../configs/dbConfig');

async function selectModels() {
    try {
        let {data, error} = await supabase
            .from('Model')
            .select('*');
       // console.log(data);    
        if (error) return error;
        return data;
    } catch (e) {
        return false;
    }
}

async function selectModel(ID) {
    try {
        let {data, error} = await supabase
            .from('Model')
            .select('*')
            .eq('ModelID', ID);
//        console.log(data);    
        if (error) throw error
        return await data;
    } catch (e) {
        throw e
    }
}

module.exports = { selectModels , selectModel};