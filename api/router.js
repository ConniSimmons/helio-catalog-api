const express = require('express');
 
module.exports = function (Model) {
    const modelKey = Model.modelName.toLowerCase();
    const router = express.Router();
    const controller = require('./controller');
    const ctrl = controller(Model);
    router.get(`/api/${modelKey}/`, ctrl.findAll);
    router.get(`/api/${modelKey}/archived`, ctrl.findAllArchived);
    router.get(`/api/${modelKey}/:id`, ctrl.findById);
    router.get(`/api/${modelKey}/:id`, ctrl.findOne);
    router.post(`/api/${modelKey}/`, ctrl.create);
    router.delete(`/api/${modelKey}/:id`, ctrl.delete);
    router.put(`/api/${modelKey}/:id`, ctrl.update);
   
    return router;
}