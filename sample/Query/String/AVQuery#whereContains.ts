/// <reference path="../../../typings/index.d.ts" />

import * as chai from 'chai';
import * as AV from 'leancloud-storage';
import * as testFire from "../../init";

// 测试用例所需要的前置条件都需要在启动的时候调用，例如
/*
AV.init({
  appId:'{put-test-appId-here}}',
  appKey:'{put-test-appKey-here}'});
*/

// 或者有一些需要提前写入的测试数据，例如用户修改密码等操作，需要的前置条件是用户已经存在
// 因此，也需要在脚本加载的时候就执行

// 还可以定义一些占位符变量，例如测试用例要用到的 objectId 等重要数据
/*
let targetObjectId = '';
let file = ...
*/
// category-name 可以是 Object，File 等功能模块的首字母大写
let objectId = '';
describe('Object', function () {
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
        let todo = new AV.Object('Todo');
        todo.set('content', '修复线上的 bug');
        return todo.save<AV.Object>().then(todo => {
            objectId = todo.id;
        });
    });
    // 实例方法使用 # 分隔类和方法
    it('AVQuery#whereContains', function (done) {
        try {
            // 示例代码-Start
            let query = new AV.Query('Todo');
            query.contains('content', 'bug');
            query.find<AV.Object[]>().then(results => {
              let testObj = results[0];
              chai.assert.isTrue(testObj.id == objectId && results.length == 1);
              done();
            });
        }
        catch (e) {
            chai.assert.isNull(e);
        }
    });

    // 在 after 里面可以执行一些清理脚本，清理本次执行所产生的脏数据
    after(function () {
        // runs after all tests in this block
        let testObj = AV.Object.createWithoutData('Todo',objectId);
        return testObj.destroy();
    });
});
