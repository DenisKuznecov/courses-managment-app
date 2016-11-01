import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomPage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomPage}></IndexRoute>
		<Route path="courses" component={CoursesPage}></Route>
		<Route path="about" component={AboutPage}></Route>
	</Route>
);
