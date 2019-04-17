'use strict';
const pug = require('pug');
const util = require('./handler-util');
const Post = require('./post');
const Cookies = require('cookies');
const trackingIdkey = 'tracking_id';
function handle(req, res) {
  const cookies = new Cookies(req, res);
  addTrackingCookie(cookies);
  switch (req.method) {
    case 'GET':
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
      });
      Post.findAll({ order: [['id', 'DESC']] }).then((posts) => {
        res.end(pug.renderFile('./views/posts.pug', {
          posts: posts,
        }));
        console.info(
          `閲覧されました: user名: ${req.user}, ` +
          `trackingID: ${cookies.get(trackingIdkey) },` +
          `remoteAddress: ${req.connection.remoteAddress}, ` +
          `useragent: ${req.headers['user-agent']}, ` 
        );
      });
      break;
    case 'POST':
      let body = [];
      req.on('data', (chunk) => {
        body.push(chunk);
      }).on('end', () => {
        body = Buffer.concat(body).toString();
        const decoded = decodeURIComponent(body);
        const content = decoded.split('content=')[1];
        console.info('投稿されました: ' + content);
        Post.create({
          content: content,
          trackingCookie: cookies.get(trackingIdkey),
          postedBy: req.user,
        }).then(() => {
          handleRedirectPosts(req, res);
        });
      });
      break;
    default:
      util.handleBadRequest(req, res);
      break;
  }
}
function addTrackingCookie(cookies) {
  if (!cookies.get(trackingIdkey)) {
    const trackingId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    const tomorrow = new Date(Date.now() + (1000 * 60 * 60 * 24));
    cookies.set(trackingIdkey, trackingId, { expires: tomorrow });
  }
}
function handleRedirectPosts(req, res) {
  res.writeHead(303, {
    'Location': '/posts',
  });
  res.end();
}

module.exports = {
  handle,
};
