const asyncHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};

export default asyncHandler;

//it ensures that if any error occur inside the function then 
//it handles it by using next(err) defined inside async handler already
//it basically provide a boiler plate for error handling
//inside controller code
