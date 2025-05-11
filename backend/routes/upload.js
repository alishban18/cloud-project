const router = require('express').Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const s3 = require('../s3');
const auth = require('../middleware/auth');

router.post('/', auth, upload.single('file'), async (req, res) => {
  console.log(req.body);  // Log the request body
  console.log(req.file);   // Log the uploaded file
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const params = {
    Bucket: process.env.AWS_S3_BUCKET,
    Key: `${Date.now()}_${file.originalname}`,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    const data = await s3.upload(params).promise();
    res.json({ url: data.Location });
  } catch (err) {
    console.error('Error uploading file:', err); // Log the error details
    res.status(500).json({ error: 'Upload failed', message: err.message });
  }
});

module.exports = router;