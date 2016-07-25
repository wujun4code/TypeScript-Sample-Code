import * as chai from 'chai';
import * as AV from 'leancloud-storage';
import * as driver from '../init';

// category-name 可以是 Object，File 等功能模块的首字母大写
describe('Pointers', function () {

  before(function() {
   driver.initDriver();
  });
  //静态方法使用 .(dot) 分隔类和方法
  it('code_city_point_to_province', function (done) {
    try{
      // 示例代码-Start
      // driver.initDriver();
      let GuangZhou : AV.Object = new AV.Object('City');
      GuangZhou.set('name','广州');

      let GuangDong : AV.Object = new AV.Object('Province');
      GuangDong.set('name','广东');

      GuangZhou.set('dependent',GuangDong);

      GuangZhou.save<AV.Object>().then(guangZhou =>{
        chai.assert.isNotNull(guangZhou.id);
        done();
      });
      // 示例代码-End
    }
    catch(e){
      chai.assert.isNull(e);
    }
  });

  // 在 after 里面可以执行一些清理脚本，清理本次执行所产生的脏数据
  after(function() {
    // runs after all tests in this block
  });
});
