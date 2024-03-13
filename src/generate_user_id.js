const generate_user_id = () => {
  return Math.floor(Math.random() * 10) + 1;
};

export default generate_user_id;