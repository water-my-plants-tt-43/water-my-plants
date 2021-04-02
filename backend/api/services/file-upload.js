const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  region: 'us-east-2'
})

const s3 = new aws.S3()

const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
    file.contentType = file.mimetype
    cb(null, true)
  } else {
    cb(new Error('Invalid Mime Type, only JPEG and PNG'), false)
  }
}

const upload = multer({
  fileFilter,
  storage: multerS3({
    s3,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    bucket:'water-my-plants-tt43',
    acl: 'public-read',
    metadata: function(req, file, cb) {
      cb(null, {fieldName: 'TESTING_META_DATA'})
    },
    key: function(req, file, cb){
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload
