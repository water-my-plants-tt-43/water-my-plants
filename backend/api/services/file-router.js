const express = require('express')
const router = express.Router();
const Files = require('./file-model')
const {restricted} = require('../auth/auth-middleware')

const upload = require('./file-upload')

const singleUpload = upload.single('image');

router.post('/:plant_id/image-upload', restricted, async (req, res) => {
  await singleUpload(req, res, function(err){
    if(err){
      res.status(422).send({errors: [{title: 'file upload error', detail: err.message}]})
    } else {
      const newImageUrl = req.file.location
      const plant = req.params.plant_id
      Files.insertImage(newImageUrl, plant)
      return res.json({'imageUrl': req.file.location})
    }
  })
})
router.get('/:plant_id/images', restricted, async (req, res) => {
  const plantImages = await Files.findByPlantId(req.params.plant_id)
  res.json(plantImages)
})

module.exports = router