module.exports = {
  banner: true,
  // TODO module name 与 name 的关系？(difference between module name and name ??)
  // https://github.com/ly525/rp-date-range-picker/issues/2
  moduleName: 'RpDateRangePicker',
  name: 'rp-date-range-picker',
  format: ['umd', 'umd-min', 'cjs', 'es'],
  plugins: ['vue'],
  vue: {
    css: 'dist/rp-date-range-picker.css',
  },
  external: ['vue', 'moment'],
  globals: {
    Vue: 'vue',
  },
};
