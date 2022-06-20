export const subtitleForm = (title) => {
  if(title.toLowerCase() === 'sign up'){
    return <h6>If you have an account - <a href="/login">Sign In</a></h6>
  }else {
    return <h6>If you don't have an account - <a href="/register">Sign up</a></h6>
  };
};