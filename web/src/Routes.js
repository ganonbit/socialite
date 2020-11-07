// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router';

const Routes = () => {
  return (
    <Router>
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path='/messages/new' page={NewMessagePage} name='newMessage' />
      <Route path='/messages/{id}/edit' page={EditMessagePage} name='editMessage' />
      <Route path='/messages/{id}' page={MessagePage} name='message' />
      <Route path='/messages' page={MessagesPage} name='messages' />
      <Route path='/comments/new' page={NewCommentPage} name='newComment' />
      <Route path='/comments/{id}/edit' page={EditCommentPage} name='editComment' />
      <Route path='/comments/{id}' page={CommentPage} name='comment' />
      <Route path='/comments' page={CommentsPage} name='comments' />
      <Route path='/users/new' page={NewUserPage} name='newUser' />
      <Route path='/users/{id}/edit' page={EditUserPage} name='editUser' />
      <Route path='/users/{id}' page={UserPage} name='user' />
      <Route path='/users' page={UsersPage} name='users' />
      <Route path='/posts/new' page={NewPostPage} name='newPost' />
      <Route path='/posts/{id:Int}/edit' page={EditPostPage} name='editPost' />
      <Route path='/posts/{id:Int}' page={PostPage} name='post' />
      <Route path='/posts' page={PostsPage} name='posts' />
      <Route path='/social-handles/new' page={NewSocialHandlePage} name='newSocialHandle' />
      <Route path='/social-handles/{id:Int}/edit' page={EditSocialHandlePage} name='editSocialHandle' />
      <Route path='/social-handles/{id:Int}' page={SocialHandlePage} name='socialHandle' />
      <Route path='/social-handles' page={SocialHandlesPage} name='socialHandles' />
      <Route path='/channels/new' page={NewChannelPage} name='newChannel' />
      <Route path='/channels/{id}/edit' page={EditChannelPage} name='editChannel' />
      <Route path='/channels/{id}' page={ChannelPage} name='channel' />
      <Route path='/channels' page={ChannelsPage} name='channels' />
      <Route path='/about' page={AboutPage} name='about' />
      <Route path='/' page={HomePage} name='home' />
      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;
