const asyncHandler = (requestHandler) => {
    return async (req, res, next) => {
        try {
            await requestHandler(req, res, next);
        } catch (err) {
            next(err);
        }
    }
}

export default asyncHandler;



/*
const asyncHandler = async (requestHandler) => {
    return(req, res, next) =>{
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => next(err));
    }
}
*/