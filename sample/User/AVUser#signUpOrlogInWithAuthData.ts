/// <reference path="../../typings/index.d.ts" />

import * as chai from 'chai';
import * as AV from 'leancloud-storage';
import * as utils from "../Common/utils";
import * as testFire from "../init";

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
describe('User', function () {

  // 测试用例所需要的前置条件都需要在启动的时候调用。
  // 在 before 函数里面执行一些欲置脚本
  // 例如初始化 LeanCloud SDK
  before(function () {
    // runs before all tests in this block
    // 实例方法使用 # 分隔类和方法
  });
  it('AVUser#signUpOrlogInWithAuthData', function (done) {
    try {
      AV.User.signUpOrlogInWithAuthData({
        "openid": "oPrJ7uM5Y5oeypd0fyqQcKCaRv3o",
        "access_token": "OezXcEiiBSKSxW0eoylIeNFI3H7HsmxM7dUj1dGRl2dXJOeIIwD4RTW7Iy2IfJePh6jj7OIs1GwzG1zPn7XY_xYdFYvISeusn4zfU06NiA1_yhzhjc408edspwRpuFSqtYk0rrfJAcZgGBWGRp7wmA",
        "expires_at": "2016-01-06T11:43:11.904Z"
      }, 'weixin').then(function(s) {
        done();
      }, function(e) {
        console.log(e);
        done();
      });
    }
      // 示例代码-End
    catch (e) {
      chai.assert.isNull(e);
      done();
    }
  });
  // 在 after 里面可以执行一些清理脚本，清理本次执行所产生的脏数据
  after(function () {
    // runs after all tests in this block
  });
});