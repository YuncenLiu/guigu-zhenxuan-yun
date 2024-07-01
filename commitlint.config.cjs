module.exports = {
    extends: ['@commitlint/config-conventional'],
    // 校验规则
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat', // 新特性、新功能
                'fix',  // 修改bug
                'docs', // 文档修改
                'style',    // 代码格式修改，不是 css 修改
                'refactor', // 代码重构
                'perf', // 优化相关，比如性能提升
                'test', // 测试用例修改
                'chore',    // 其他修改，比如改变构建流程、增加依赖库、工具等
                'revert',   // 会滚到上一个版本
                'build',    // 编译相关修改，例如版本发布、对项构建或者依赖的改动
            ],
        ],
        'type-case': [0],
        'type-empty': [0],
        'scope-empty': [0],
        'scope-case': [0],
        'subject-full-stop': [0, 'never'],
        'subject-case': [0, 'never'],
        'header-max-length': [0, 'always', 72],
    },
}