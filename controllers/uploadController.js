const cloudinary = require('../configs/cloudinary');

const uploadController = {
	uploadImage: async (req, res) => {
		try {
			if (!req.file) {
				return res.status(400).json({ error: 'No file uploaded' });
			}

			console.log('File received:', req.file);

			const result = await cloudinary.uploader.upload(req.file.path, {
				folder: 'vodacom',
			});
			res.json({
				message: 'Image uploaded successfully',
				imageUrl: result.secure_url,
			});
		} catch (error) {
			console.error('Error uploading image:', error);
			res
				.status(500)
				.json({ error: 'Error uploading image', details: error.message });
		}
	},
};

module.exports = uploadController;
