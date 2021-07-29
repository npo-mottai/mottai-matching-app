// vetur.config.js
/** @type {import('vls').VeturConfig} */
module.exports = {
  settings: {
    "vetur.useWorkspaceDependencies": true,
    "vetur.experimental.templateInterpolationService": true
  },
  projects: [
    {
      root: './nuxt-app', // ←ここをvueプロジェクトのフォルダに合わせる
      package: './package.json',
      tsconfig: './tsconfig.json',
      globalComponents: [
      ]
    },
    {
      root: './functions', // ←ここをvueプロジェクトのフォルダに合わせる
      package: './package.json',
      tsconfig: './tsconfig.json',
    }
  ]
}