# SQLite3 基础知识

## 连接到指定到数据库文件
```sh
 sqlite3 filename.sqlitedb 
```

## 退出SQLite客户端软件
```sh
 sqlite>.exit 
```

## 显示数据库中的表
```sh
sqlite>.tables 
```

## 将表结构转成SQL语句

```sh
 .dump table-name 
```

运行结果
```sql
PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE article (
    id              INTEGER     PRIMARY KEY AUTOINCREMENT,              -- 账户id
    enabled         INTEGER     default 0,                              -- 默认禁用
    create_time     INTEGER     default (datetime('now', 'localtime')), -- 创建日期
    name            TEXT        NOT NULL,                               -- 昵称
    birthday        INTEGER                                             -- 生日
);
COMMIT;
```