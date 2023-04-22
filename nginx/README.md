# nginx 学习

存放 nginx 实战的例子，方便快速进行 nginx 相关的实验

## 目录结构

```bash
- volumn        # 挂载到 nginx 镜像的目录
    - conf.d    # nginx 配置文件
    - logs      # nginx 日志
    - www       # 站点根目录
    - nginx.conf # nginx 配置文件
```

nginx 配置参考（带注释）
- [conf.d/example.com](./volumn/conf.d/example.com.conf)

## 脚本

```bash
# 停止容器（如果有），测试 nginx 配置，启动 nginx
./start.sh

# 重载 nginx 配置
./reload.sh

# 停止 nginx 服务
./stop.sh

# 测试 nginx 服务
./test.sh
```


参考资料

- [nginx docs](https://devdocs.io/nginx)
- [curl: Name resolve tricks](https://everything.curl.dev/usingcurl/connections/name) curl offers many ways to make it use another host than the one it normally would connect to.