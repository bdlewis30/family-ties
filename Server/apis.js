const express = require('express');
const router = express.Router();
const group_controller = require('./group_controller');

// Group

router.get('/group', group_controller.getAllGroups);

// router.get('/group/:group_id', group_controller.getOneGroup);

// router.post('/group', group_controller.addGroup);

// router.put('/group/:group_id', group_controller.updateGroup);

// router.delete('/group/:group_id', group_controller.deleteGroup);

// Family

// router.get('/family', family_controller.getAllFamilies);

// router.get('/family/:family_id', family_controller.getOneFamily);

// router.post('/family', family_controller.addFamily);

// router.put('/family/:family_id', family_controller.updateFamily);

// router.delete('/family/:family_id', family_controller.deleteFamily);

// // Individual

// router.get('/individual', individual_controller.getAllIndividuals);

// router.get('/individual/:individual_id', individual_controller.getOneIndividual);

// router.post('/individual', individual_controller.addIndividual);

// router.put('/individual/:individual_id', individual_controller.updateIndividual);

// router.delete('/individual/:individual_id', individual_controller.deleteIndividual);

// // Posts

// router.get('/post', post_controller.getAllposts);

// router.get('/post/:post_id', post_controller.getOnepost);

// router.post('/post', post_controller.addpost);

// router.put('/post/:post_id', post_controller.updatepost);

// router.delete('/post/:post_id', post_controller.deletepost);

module.exports = router;