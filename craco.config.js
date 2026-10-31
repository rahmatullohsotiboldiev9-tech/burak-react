module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            const plugin = webpackConfig.plugins.find(
                (p) => p.constructor.name === 'ForkTsCheckerWebpackPlugin'
            );
            if (plugin) {
                plugin.options.typescript.memoryLimit = 4096;
            }
            return webpackConfig;
        },
    },
};