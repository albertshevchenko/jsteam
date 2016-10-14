#Учебный репозиторий
---

>Итерация свойственна человеку, рекурсия божественна.  
> — *L. Peter Deutsch*


##Изучаемые технологии
---

* JavaScript
* Node.js
* ES6
* Gulp
* PostCSS
* ESlint
* Stylelint

##Описание содержимого
---

Как было понятно из заголовка данного документа, весь ужас собранный в этом репозитории носит сугубо учебный характер.


###gulpfile.js
    const gulp = require('gulp');
    const postcss = require('gulp-postcss');
    const short = require('postcss-short');
    const assets = require('postcss-assets');
    const reporter = require('postcss-browser-reporter');
    const stylelint = require('stylelint');
    const babel = require('gulp-babel');
    //const замена привычной var согласно ES6

    const rulesStyle = require('./stylelintrc.json'); // стак правил для Stylelint версии 1.2.1

    // Первая задача для Gulp - работа со стилями с помощью технологии PostCSS c интегрированными плагинами

    gulp.task('style', () => {
    const processors = [
      assets,
      short,
      stylelint(rulesStyle),
      reporter()
    ];
    return gulp.src('./input/css/**/*.css') // Файлы для проверки и преобразования берутся из директории input, поддиректории css
    .pipe(postcss(processors))
    .pipe(gulp.dest('./css/')); // Обработанные файлы помещаются в директорию css в корневом каталоге проекта
    });

    // Вторая задача - преобразование и проверка js файлов с помощью технологий babeljs и ESlint

    gulp.task('js', () => {
      return gulp.src('./input/js/**/*.js') // Исходные файлы берутся из директории input, поддиректории js
      .pipe(babel()) // Файл конфигурации лежит в корне проекта
      .pipe(gulp.dest('./js/')); // Отработанные файлы помещаются в директорию js в корне проекта
    });

###.eslintrc.js
    //Файл конфигурации для ESlint, как видно из кода файла технология настроена согласно конфигурации Airbnb.
    Изначало в файле конфигурации были подключены подолнительные 3 плагина, но я их удалил из за отсутствия необходимости.

    module.exports = {
      "extends": "airbnb",
      "installedESLint": true,
    };

###.babelrc
    // Стоковая конфигурация технологии транспилера babeljs, которая позволяет использовать неподдерживаемый функционал ES6 в тех или иных браузерах
    {
        presets: ['es2015']
    }
###.gitignore
    // Пока только чистит временные файлы
    git clean -fX

###package.json

    // Подлючение технологий и их плагинов
    {
      "name": "dteam",
      "version": "1.0.0",
      "description": "dteam project",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "Albert Shevchenko",
      "license": "ISC",
      "dependencies": {
        "babel-preset-es2015": "^6.16.0",
        "eslint": "^3.7.1",
        "gulp": "^3.9.1",
        "gulp-babel": "^6.1.2",
        "gulp-postcss": "^6.2.0",
        "postcss-assets": "^4.1.0",
        "postcss-browser-reporter": "^0.5.0",
        "postcss-short": "^2.0.1",
        "stylelint": "1.2.1" // Отключено обновноление пакета ввиду особенности набора правил
      },
      "devDependencies": {
        "eslint": "^3.7.1",
        "eslint-config-airbnb": "^12.0.0",
        "eslint-plugin-import": "^2.0.1",
        "eslint-plugin-jsx-a11y": "^2.2.3",
        "eslint-plugin-react": "^6.4.1"
      }
    }
###stylelint.json

    // Набор правил для stylelint
    {
    	"rules": {
    		"at-rule-empty-line-before": [2, "always", {"except": ["first-nested", "blockless-group"], "ignore": ["after-comment"]}],
    		"at-rule-no-vendor-prefix": 0,
    		"block-closing-brace-newline-after": [2, "always-multi-line"],
    		"block-closing-brace-newline-before": [2, "always"],
    		"block-closing-brace-space-after": [0, "never"],
    		"block-closing-brace-space-before": [2, "always-single-line"],
    		"block-no-empty": 0,
    		"block-opening-brace-newline-after": [2, "always"],
    		"block-opening-brace-newline-before": [2, "never-single-line"],
    		"block-opening-brace-space-after": [2, "always-single-line"],
    		"block-opening-brace-space-before": [2, "always"],
    		"color-no-invalid-hex": 2,
    		"comment-empty-line-before": [0, "always"],
    		"comment-space-inside": [0, "always"],
    		"custom-property-no-outside-root": 2,
    		"declaration-bang-space-after": [2, "never"],
    		"declaration-bang-space-before": [2, "always"],
    		"declaration-block-semicolon-newline-after": [2, "always"],
    		"declaration-block-semicolon-newline-before": [2, "never-multi-line"],
    		"declaration-block-semicolon-space-before": [2, "never"],
    		"declaration-colon-space-after": [0, "always"],
    		"declaration-colon-space-before": [2, "never"],
    		"declaration-no-important": 2,
    		"function-calc-no-unspaced-operator": 2,
    		"function-comma-space-after": [2, "always"],
    		"function-comma-space-before": [2, "never"],
    		"function-parentheses-space-inside": [2, "never"],
    		"function-space-after": [2, "always"],
    		"indentation": [0, 4],
    		"media-feature-colon-space-after": [2, "always"],
    		"media-feature-colon-space-before": [2, "never"],
    		"media-feature-name-no-vendor-prefix": 2,
    		"media-feature-range-operator-space-after": [2, "always"],
    		"media-feature-range-operator-space-before": [2, "always"],
    		"media-query-list-comma-newline-after": [2, "never-multi-line"],
    		"media-query-list-comma-newline-before": [2, "never-multi-line"],
    		"media-query-list-comma-space-after": [2, "always"],
    		"media-query-list-comma-space-before": [2, "never"],
    		"media-query-parentheses-space-inside": [2, "never"],
    		"no-eol-whitespace": 2,
    		"no-missing-eof-newline": 2,
    		"no-multiple-empty-lines": 2,
    		"number-leading-zero": [2, "never"],
    		"number-no-trailing-zeros": 2,
    		"number-zero-length-no-unit": 2,
    		"property-no-vendor-prefix": 0,
    		"rule-nested-empty-line-before": [0, "always", {"except": ["first-nested"], "ignore": ["after-comment"]}],
    		"rule-no-duplicate-properties": 2,
    		"rule-no-single-line": 0,
    		"rule-non-nested-empty-line-before": [0, "always-multi-line"],
    		"rule-trailing-semicolon": [2, "always"],
    		"selector-combinator-space-after": [2, "always"],
    		"selector-combinator-space-before": [2, "always"],
    		"selector-list-comma-newline-after": [0, "always"],
    		"selector-list-comma-newline-before": [2, "never-multi-line"],
    		"selector-list-comma-space-before": [2, "never"],
    		"selector-no-type": 0,
    		"selector-no-id": 2,
    		"selector-no-combinator": 0,
    		"selector-no-universal": 2,
    		"selector-no-vendor-prefix": 2,
    		"selector-pseudo-element-colon-notation": [2, "single"],
    		"string-quotes": [2, "single"],
    		"value-list-comma-newline-after": [2, "always-multi-line"],
    		"value-list-comma-newline-before": [2, "never-multi-line"],
    		"value-list-comma-space-after": [0, "never"],
    		"value-list-comma-space-before": [2, "never"],
    		"value-no-vendor-prefix": 2
    	}
    }
