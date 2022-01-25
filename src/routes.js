import page404 from './pages/404';
import page500 from './pages/500';
import pageChangePassword from './pages/changePassword';
import pageChat from './pages/chat';
import pageEdit from './pages/edit';
import pageIndex from './pages/index';
import pageLogin from './pages/login';
import pageProfile from './pages/profile';
import pageRegistration from './pages/registration';

import pathnames from './constants/pathnames';

// TODO: remove static files and change to dynamic routes

export default {
  [pathnames.page404]: page404(),
  [pathnames.page500]: page500(),
  [pathnames.pagePassword]: pageChangePassword(),
  [pathnames.pageChat]: pageChat(),
  [pathnames.pageEdit]: pageEdit(),
  [pathnames.pageIndex]: pageIndex(),
  [pathnames.pageLogin]: pageLogin(),
  [pathnames.pageProfile]: pageProfile(),
  [pathnames.pageRegistration]: pageRegistration(),
};
