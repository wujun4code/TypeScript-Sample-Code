/// <reference path="../../typings/index.d.ts" />
import * as chai from 'chai';
import * as AV from 'leancloud-storage';
import * as testFire from "../init";
import * as utils from "../Common/utils";


describe('Object', function () {
  it('AVFile#relatedAVUser', function (done) {
    let data = { base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAehJREFUaAXtms9Kw0AQxmc2rR5EkEIQPHq1F6+B3nwIH0DwLObUs3gSPIlPIT5EIXcPPoJgCQTBW0uyziQ9JIspjWPTXdjQkOxm//zm+zYbmixCbRs/fUSggpiyIq0hRARVu7yzU2IpiCUlgASK/KE8rmiQoEGnX3sYju414o0t0G1qlcFo/ajTbEplFgOCB4YHhbfYVsui/FJgJNZwxFQxOxBpDGa2K29qWDmRTwY85kl5K8a6CbkuXTkRxAwerSto+bVI8WxjOWQrHrMr18Z+PRpmd27s1wPg84GZ0SV9dX4AJ4dNDQoNcDf77tKMqKwogIvTfTgLhw2AZa57DaApXwPFjYQPYNc+eQe8A0IF/BASCiiu7h0QSyhswDsgFFBc3TsgllDYgHdAKKC4undALKGwAe+AUEBxddGf+rbeVYe3xPRyCuj35+3fAxgGCG/XxxsDvadLuHzJNi5vFvT3gKlI32nvQN+Km/3h+PlTMglAhwnH7LtMizqnFsSzkBTg16g6ZPp7oINYWynKn5iKrbTcQ6PMzp+Y+Au4kxuz8z2QOElfQSeK1x64OIxKZmIvHUBae+CaCxWzSug5oGixRzbltQcOLvYARfAs/oKOMep8QuevtM9tGlYrljmzVYxFjOHRgnb4Ab2JigFGXSI7AAAAAElFTkSuQmCC' };
    let avatar = new AV.File('leancloud.png', data);

    let user = new AV.User();
    let randomUsername = utils.randomString(8);
    user.setUsername(randomUsername)
    user.setPassword('leancloud');
    user.set('avatar',avatar);
    user.signUp().then(u =>{
      chai.assert.isNotNull(user.id);
      done();
    });
  });
});
