const { selectModels, selectModel } = require('../models/GetModel.js');

const getApiPosts = async (req, res) => {
    let posts = await selectModels();
    console.log(posts);
    res
      .status(200)
      .send(JSON.stringify(posts));
}

const getApiPost = async (req, res) => {
    console.log(req.params.id);
    let post = await selectModel(req.params.id);
    console.log(post);
    res
      .status(200)
      .send(JSON.stringify(post));
}

module.exports = {
    getApiPosts,
    getApiPost,
}