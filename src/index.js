import './index.css';
import state, { addPost } from './redux/state';
import { rerenderEntierTree } from './rerender';

rerenderEntierTree(state);