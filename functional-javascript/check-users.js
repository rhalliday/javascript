function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(user =>
      goodUsers.some(goodUser => user.id === goodUser.id)
    );
  };
}

module.exports = checkUsersValid;
