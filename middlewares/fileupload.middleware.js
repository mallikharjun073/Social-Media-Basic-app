import multer from "multer";
import path from "path"
const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, 'uploads')
    },
    filename: (req, file,cb) =>{
        cb(null,Date.now()+file.originalname)
    }
});

const Fileupload = multer({storage:storage});

export default Fileupload;