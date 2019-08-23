import { isLoggedIn } from './shared/authFilter';

exports.handler = async function (event, context, callback) {
  const loggedIn = isLoggedIn(event, context, callback);

  if (loggedIn) {
    console.log('Logged in user quering scheduling API: ')
    return { statusCode: 200, body: JSON.stringify({ msg: 'Welcome!' }) };
  }

  console.log('This was invoked illegally');
  throw Error('User not logged in');
}