const path = require('path');

const { addModel } = require('../models/AddModel.js');
const { selectModels } = require('../models/GetModel.js');
const createPath = require('../middlewares/create-path');

/*
const getHome = (req, res) => {
    res
    .status(200)
    .sendFile(createPath('newPost'));
}*/

const getPosts = async (req, res) => {
    let posts = await selectModels();
    //console.log(posts);
    res
    .status(200)
    .sendFile(createPath('posts'));
}
/*
const getPost = (req, res) => {
    res
    .status(200)
    .sendFile(createPath('post'));
  }*/

const addPost = (req, res) => {
    res
    .status(200)
    .sendFile(createPath('newPost'));
}

const sendPost = async (req, res) => { //перенос данных в бд
    if (!req.body?.name) {
      let error = {
        status: "error",
        message: "Не хватает данных",
      };
      res.statusCode = 400;
      res.send(error);
      return;
    }

    let model = {
      Name: req.body.name,
      Info: req.body.description,
    };
    console.log(model);
    let data = await addModel(model);
    
    if (!data) {
        let error = {
          status: "error",
          message: "Ошибка при добавлении в базу данных",
        };
        res.statusCode = 400;
        res.send(error);
        return;
    }
    
    let answer = {
      status: "ok",
      data: model,
    };
    res.statusCode = 200;
    res.send(answer);
  };


module.exports = {
    //getHome,
    getPosts,
    //getPost,
    addPost,
    sendPost,
}