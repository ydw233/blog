### 官方定义
---
系统服务的概念是指在执行框架的某些组件或者功能的时候需要依赖的一些基础服务

### 创建服务
---
``` php
php think make:service  FileSystemService
```

### Sercice Class
``` php
declare (strict_types = 1);
namespace app\service;
class LoginService extends \think\Service
{
    /**
     * 注册服务
     *
     * @return mixed
     */
    public function register()
    {
        // 这里和 provider 一样绑定实例或者clouser等到 app 中
        // $this->app->bind('file_system', FileSystem::class);
    }
    /**
     * 执行服务
     *
     * @return mixed
     */
    public function boot()
    {
        // 这里是具体的执行逻辑，全局执行！例如这里 echo 'test'; 则访问任意url都会输出 test
    }
}
```