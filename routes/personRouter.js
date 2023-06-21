const express = require('express');
const router = express.Router();
const { createProfile, getPersons,getPerson,updatePerson,deletePerson } = require('../controllers/personController')
const upload = require('../utils/multer')
const validatePerson = require('../middleware/personValidate')


// router.post('/profiles', validatePerson, upload.single('personProfile'), createProfile)
// router.get('/profiles', getPersons)
// router.get('/profiles/:id', getPerson)
// router.put('/profiles/:id', upload.single('personProfile'), updatePerson)
// router.delete('/profiles/:id', deletePerson)

// module.exports = router



router.post('/profiles', validatePerson, upload.single('personProfile'), createProfile)
router.get('/profiles', getPersons)
router.get('/profiles/:id', getPerson)
router.put('/profiles/:id', upload.single('personProfile'), updatePerson)
router.delete('/profiles/:id', deletePerson)

module.exports = router