/**
 * Checks if the given component has the matching specified fields.
 * @param component
 * @param [name] The expected component name.
 * @param [id] The expected component id.
 * @param [description] The expected component description.
 */
const checkFieldsOnComponent = (component, {
  name,
  id,
  description,
}) => {
  const isValidArr = [];

  if (name) isValidArr.push(name === component.name);
  if (id) isValidArr.push(id === component.id);
  if (description) isValidArr.push(description === component.description);

  // If any one is false then the component is not the same
  return !isValidArr.includes(false);
};

export default checkFieldsOnComponent;