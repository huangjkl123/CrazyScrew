let moduleMap = {
'src/assets/scripts/plugins/thinkingdata.mg.cocoscreator.min.js' () { return require('src/assets/scripts/plugins/thinkingdata.mg.cocoscreator.min.js') },
'assets/framework/index.js' () { return require('assets/framework/index.js') },
'assets/gameScript/index.js' () { return require('assets/gameScript/index.js') },
'src/scripts/resources/index.js' () { return require('src/scripts/resources/index.js') },
'assets/script/index.js' () { return require('assets/script/index.js') },
'assets/internal/index.js' () { return require('assets/internal/index.js') },
'assets/main/index.js' () { return require('assets/main/index.js') },
// tail
};

window.__cocos_require__ = function (moduleName) {
    let func = moduleMap[moduleName];
    if (!func) {
        throw new Error(`cannot find module ${moduleName}`);
    }
    return func();
};