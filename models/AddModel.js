const { supabase } = require('../configs/dbConfig');

const addModel = async model => {
    try {
        const {data, error} = await supabase
            .from('Model')
            .insert(model)

        if (error) throw error
        return data
    } catch (e) {
        console.warn(e);

        return null;
    }
}

module.exports = { addModel };