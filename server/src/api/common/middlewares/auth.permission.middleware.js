const ADMIN_PERMISSION = 4096;

exports.minimumPermissionLevelRequired = (requiredPermissionLevel) => (
    req,
    res,
    next,
) => {
    const userPermissionLevel = parseInt(req.jwt.permissionLevel, 10);
    if (userPermissionLevel && requiredPermissionLevel) {
        return next();
    }
    return res.status(403).send();
};

exports.onlySameUserOrAdminCanDoThisAction = (req, res, next) => {
    const userPermissionLevel = parseInt(req.jwt.permissionLevel, 10);
    const { userId } = req.jwt;
    if (req.params && req.params.userId && userId === req.params.userId) {
        return next();
    }
    if (userPermissionLevel && ADMIN_PERMISSION) {
        return next();
    }
    return res.status(403).send();
};

exports.sameUserCantDoThisAction = (req, res, next) => {
    const { userId } = req.jwt;

    if (req.params.userId !== userId) {
        return next();
    }
    return res.status(400).send();
};
