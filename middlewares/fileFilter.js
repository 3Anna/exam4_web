const { diskStorage } = require('multer');
const multer = require('multer');
const path = require('path');


const storage = diskStorage({ 
    destination: (req, file, cb) => { 
        cb(null, './images');//файлы будут храниться в каталоге uploads 
    },
    filename: (req, file, cb) => {//указывает как назвать файлы
        cb(null, file.originalname);//имя файла будет таким же как на пк пользователя
    }
});

function checkFileType(file, cb) {
    const filetypes = /jpeg|JPEG|jpg|JPG|png|PNG/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());//метод test выполняет поиск сопоставления регулярного выражения указанной строке 
    //extname возвращает расширение файла 
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) { 
        return cb(null, true);//принимает файл, если будет false - отклоняем файл
    } else {
        cb('Error: Images Only!');
    }
}

const upload = multer({ 
    storage: storage,
    fileFilter: (_req, file, cb) => { 
        checkFileType(file, cb); 
    }
}).any('image');//принимает все переданные файлы, массив файлов будет сохранен в req.files

module.exports = {upload};
//export default upload;