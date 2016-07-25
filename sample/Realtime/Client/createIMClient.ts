/// <reference path="../../../typings/index.d.ts" />
import * as chai from 'chai';
import * as AV from 'leancloud-storage';
import * as LeanMessage from 'leancloud-realtime';

describe('Realtime', function () {

    // 测试用例所需要的前置条件都需要在启动的时候调用。
    // 在 before 函数里面执行一些欲置脚本
    // 例如初始化 LeanCloud SDK
    before(function () {
        // runs before all tests in this block
        /*
        AV.init({
          appId:'{put-test-appId-here}}',
          appKey:'{put-test-appKey-here}'});
        */
    });
    // 实例方法使用 # 分隔类和方法
    it('Realtime#createIMClient', function (done) {
        try {
            // 示例代码-Start
            let realtime = new LeanMessage.Realtime({ appId: 'uay57kigwe0b6f5n0e1d4z4xhydsml3dor24bzwvzr57wdap', region: 'cn' });
            realtime.createIMClient('Tom').then(tom => {
                return tom.createConversation({
                    members: ['Jerry'],
                    name: 'Tom & Jerry',
                    unique : true
                });
            }).then(conversation => {
              return conversation.send(new LeanMessage.TextMessage('耗子，起床！'));
            }).then(message =>{
              console.log('Tom & Jerry', '发送成功！');
              done();
            }).catch(console.error);
            // 示例代码-End

        }
        catch (e) {
            chai.assert.isNull(e);
        }
    });

    // 在 after 里面可以执行一些清理脚本，清理本次执行所产生的脏数据
    after(function () {
        // runs after all tests in this block
    });
});
