/** 
 * 参考：https://github.com/fjc0k/yapi-to-typescript/tree/v0
 * ，我们的 YAPI 版本 1.4.1 很旧，要用 v0 分支才能支持旧版本。
 */

import { Config, InterfaceType } from 'yapi-to-typescript/lib/types';

function categories(ids) {
  function removePathParams(dir: string) {
    return dir.replace(/\/:[^/]*/g, '/');
  }

  // 键是分类 ID，
  // 比如有接口分类的 url 为：http://foo.bar/project/20/interface/api/cat_55，
  // 则其 ID 为 55
  return ids.reduce((cur, id) => {
    return {
      ...cur,
      [id]: {
        // 下面的配置结果示例：
        // export function getUserInfo(data: GetUserInfoRequest): Promise<GetUserInfoResponse> { ... }
        // 获取接口名称，这里的接口指 TypeScript 中的 interface，非 api 接口
        getInterfaceName(api, interfaceType) {
          const { method, changeCase, parsedPath } = api;

          const Method = changeCase.pascalCase(method);
          const dir = parsedPath.dir;
          const name = parsedPath.name;
          const fullPath = `${dir}/${name}`;
          // const trimmedPath = removePathParams(fullPath);
          const Path = changeCase.pascalCase(fullPath);

          // 加 method 是为了避免重名
          const interfaceName = `I${Path}${Method}${interfaceType === InterfaceType.Request ? 'Request' : 'Response'}`;
          return interfaceName;
        },
        // 获取 api 接口函数名称
        getRequestFunctionName(api) {
          const { method, changeCase, parsedPath } = api;

          const Method = changeCase.pascalCase(method);
          const dir = parsedPath.dir;
          const name = parsedPath.name;
          const fullPath = `${dir}/${name}`;
          // const trimmedPath = removePathParams(fullPath);
          const Path = changeCase.pascalCase(fullPath);

          // 加 method 是为了避免重名
          const requestFunctionName = `fetch${Path}${Method}`;

          return requestFunctionName;
        },
      },
    };
  }, {});
}

const config: Config = {
  // 项目全部接口页面的 url
  projectUrl: 'https://yapi.nocode-tech.com/project/686/interface/api',
  // 登录信息
  // 登录信息
  login: {
    // 登录方式：classical（普通登录）、ldap（LDAP）
    method: 'classical',
    // 登录邮箱
    email: 'wusw@nocode.com',
    // 登录密码
    password: '3e556ysK2treDPt',
  },
  // openapi 方式登录，yapi 版本大于等于 1.5.0 时推荐使用
  // login: {
  //   method: 'openapi',
  //   token: '1ca3b98e467195447b4f',
  // },
  // 随请求发送的其他 Cookie，一般情况下不必理会
  // 如：a=1; b=2
  extraCookies: '',
  // 生成的 TypeScript 文件路径，
  // 同时，如果同级目录下不存在 `request.ts` 文件，
  // 执行 `ytt` 时则会自动创建一个默认的 `request.ts` 文件
  targetFile: 'src/api/index.ts',
  // 若接口返回的是类似 { code: number, msg: string, data: any } 这种数据，
  // 往往我们只需要 data，这时我们可设置 dataKey 为 data，
  // 则接口函数返回的就是 data 的值
  dataKey: '',
  // 接口分类
  categories: categories([
    3514,//用户
    3339,//医生
    3502,//疾病与科室的关联
    3304,//公共分类
    3374,//新医院映射
    3311,//科室映射
    3318,//科室
    3353,//医院
    3458,//医疗主题
    3470,//医疗测试
    3474,//主题图谱
    3480,//数据同步
    3532,//药品
    3346,//疾病
    3544,//标注任务
    3572,//众包系统
    3576,//内容管理
    3578,//请求日志
    3580,//接口测试
  ]),
};

export default config;
