import React from 'react';

import config from '../../config';

export default function PageFooter() {
  return (
    <div id="footer">
      <ul className="copyright">
        <li>&copy; {config.authorName}. All rights reserved.</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  );
}
