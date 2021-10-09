import express from 'express';
// importing all controllers
import {
	getMemories,
	postMemories,
	getSingleMemory,
	deleteMemory,
	patchMemory,
	updateLike,
	commentPost,
} from '../controller/appcontrol.js';
import auth from '../middlewear/Auth.js';

// importing router
const router = express.Router();

// to get post and post route
router.route('/').get(getMemories).post(auth, postMemories);
// to git single id route
router
	.route('/:id')
	.get(getSingleMemory)
	.patch(auth, patchMemory)
	.delete(auth, deleteMemory);

router.route('/:id/likepost').patch(auth, updateLike);
router.route('/:id/commentpost').post(auth, commentPost);
export default router;
