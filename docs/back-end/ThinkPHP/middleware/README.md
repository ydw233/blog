### 官方定义
---
间件主要用于拦截或过滤应用的HTTP请求，并进行必要的业务处理；录入某些路由需要作登陆判断，并保存会员信息。

### 生成中间件
---
<code>php think make::middleware CheckLogin</code>

``` php
namespace app\middleware;
class CheckLogin
{
    /**
     * 处理请求
     *
     * @param \think\Request $request
     * @param \Closure       $next
     * @return Response
     */
    public function handle($request, \Closure $next)
    {
        echo "我是路由中间件，只在指定路由起作用";
        return $next($request); # 这里写死
    }
}
}
```

### 在哪里使用
---
``` php
全局定义 - middleware.php

return [
    \app\middleware\CheckLogin::class,
];
```
``` php
针对路由 - route - app.php

Route::get('inspire','login/inspire')->middleware(\app\middleware\CheckLogin::class);
```
``` php
针对控制器 - route - app.php
namespace app\controller;
class Index
{
    protected $middleware = [\app\middleware\CheckLogin::class];
    protected $middleware = [ 
      'auth'  => ['except'  => ['hello'] ],
      'check' => ['only'    => ['hello'] ],
    ];
    public function index()
    {
        return 'index';
    }
    public function hello()
    {
        return 'hello';
    }
}
```
