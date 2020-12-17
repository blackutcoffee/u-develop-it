// Functionality To Verify If An Object Has The Required Properties/Parameters

module.exports = function (obj, ...props) {
  const errors = [];

  props.forEach((prop) => {
    // If Property Is Blank And/Or Doesn't Exist, Add To Errors Array
    if (obj[prop] === undefined || obj[prop] === "") {
      errors.push(`No ${prop} specified.`);
    }
  });

  if (errors.length) {
    return {
      error: errors.join(" "),
    };
  }

  return null;
};
