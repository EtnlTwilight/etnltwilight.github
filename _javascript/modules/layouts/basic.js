import { back2top } from '../components/back-to-top';
import { initTransition } from '../components/mode-transition';
import { loadTooptip } from '../components/tooltip-loader';

export function basic() {
  back2top();
  
  loadTooptip();
}
