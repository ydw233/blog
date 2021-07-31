### 官方定义
---
说的直白一点，Facade功能可以让类无需实例化而直接进行静态方式调用。

### 实现例子
---
<code>创建文件 app/common/Test.php</code>
``` php
namespace app\common;
Class Test {
    public function learn() {
        echo '学习 tp6 facade';
    }
}
```
<code>创建文件 app/facade/Test.php</code>
``` php
namespace app\facade;
use think\Facade;
Class Test extends Facade{
    protected static function getFacadeClass()
    {
      return 'app\common\Test';
    }
}
```