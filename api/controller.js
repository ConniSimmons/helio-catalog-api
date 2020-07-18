

function handleError(res, err)
{
    console.log('Got an error: ', err);
    return res.status(400).send({err});
}
 
module.exports = function(Model)
{
    return {
        create: (req, res, next) => {
            console.log('body: ', req.body);
            Model.create(req.body, function (err, result) {
                if (err) {
                    handleError(res, err);
                    return;
                }
                res.json({
                    message: `${Model.modelName} created successfully.`,
                    result,
                });
            })
        },
        update: (req, res, next) => {
            const query = {
                _id: req.params.id
            };
            Model.update(query, req.body, (err, result) => {
                if (err) {
                    handleError(res, err);
                    return;
                }
                res.json({
                    message: `${Model.modelName} updated successfully.`,
                    result,
                });
            })
        },
        delete: (req, res, next) => {
            const query = {
                _id: req.params.id
            };
            Model.delete(query, (err, result) => {
                if (err) {
                    handleError(res, err);
                    return;
                }
                res.json({
                    message: `${Model.modelName} deleted successfully.`,
                    result,
                });
            })
        },
        findAll: (req, res, next) => {
            const query = {};
            Model.get(query, (err, result) => {
                if (err) {
                    handleError(res, err);
                    return;
                }
                res.json(result);
            })
        },
        findById: (req, res, next) => {
            const query = {
                _id: req.params._id
            };
            Model.get(query, (err, result) => {
                if (err) {
                    handleError(res, err);
                    return;
                }
                res.json(result);
            })
        },
        findOne: (req, res, next) => {
            const query = {
                _id: req.params._id
            };
            Model.get(query, (err, result) => {
                if (err) {
                    handleError(res, err);
                    return;
                }
                res.json(result);
            })
        },
        findAllArchived: (req, res, next) => {
            const query = {
                archived: req.params.true
            };
            Model.get(query, (err, result) => {
                if (err) {
                    handleError(res, err);
                    return;
                }
                res.json(result);
            })
        },
    }
}