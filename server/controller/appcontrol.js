import asyncWrapper from '../middlewear/asyncControl.js';
// importing schema
import memoryTask from '../models/postSchema.js';

// requesting all memories
// async wrapper to wrap all in try and catch
// passing inside arguments
const getMemories = asyncWrapper(async (req, res) => {
	// using schema query to find
	const allMemory = await memoryTask.find();
	res.status(200).json(allMemory);
});

// posting a memory
const postMemories = asyncWrapper(async (req, res) => {
	// using schema query to create a memory
	const postTask = await memoryTask.create(req.body);
	res.status(201).json(postTask);
});

const getSingleMemory = asyncWrapper(async (req, res, next) => {
	// requesting params id
	// name can be anything we are just requesting  the params
	const { id: memoryId } = req.params;
	// using schema query
	const singleGet = await memoryTask.findOne({ _id: memoryId });
	res.status(200).json(singleGet);
});

const patchMemory = asyncWrapper(async (req, res, next) => {
	// requesting params id
	const { id } = req.params;
	// need to run validators
	// since we are using updating we need the body so mody
	const updateMemory = await memoryTask.findByIdAndUpdate(id, req.body, {
		new: true,
		runValidators: true,
	});
	res.status(201).json(updateMemory);
});

const deleteMemory = asyncWrapper(async (req, res, next) => {
	// requesting params id
	const { id } = req.params;
	// schema query
	const memoryDelete = await memoryTask.findByIdAndRemove(id);
	res.status(200).json(memoryDelete);
});

const updateLike = asyncWrapper(async (req, res, nex) => {
	// finding id requesting in paramas
	const { id } = req.params;

	if (!req.userId) return res.json({ msg: 'User not authenticated' });

	// finding Id of the related id
	const findID = await memoryTask.findById(id);

	const index = findID.likes.findIndex((id) => id === string(req.userId));

	if (index === -1) {
		findID.likes.push(req.userId);
	} else {
		findID.likes = findID.likes.filter((id) => id !== String(req.userId));
	}

	// finding Id and updating the likeed count
	const likingPost = await memoryTask.findByIdAndUpdate(id, findID, {
		new: true,
	});
	// updating the json file
	res.status(201).json(likingPost);
});

const commentPost = asyncWrapper(async (req, res, next) => {
	const { id } = req.params;
	const { value } = req.body;

	const post = await memoryTask.findById(id);

	post.comments.push(value);

	const updatePost = await memoryTask.findByIdAndUpdate(id, post, {
		new: true,
	});
	res.json(updatePost);
});

export {
	getMemories,
	postMemories,
	deleteMemory,
	getSingleMemory,
	patchMemory,
	updateLike,
	commentPost,
};
