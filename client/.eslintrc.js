module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "airbnb",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "arrow-body-style": 0,
        "consistent-return": "off",
        "linebreak-style": 0,
        "no-unused-vars": [1, {
          "vars": "all",
          "args": "none"
        }],
        "no-console": "off",
        "no-undef": 0,
        "no-unused-expressions": 0,
        "import/prefer-default-export": 0,
        "no-param-reassign": 1,
        "no-use-before-define": 0,
        "padded-blocks": [2, "never"],
        "no-trailing-spaces": 0,
        "prefer-const": 1,
        "jsx-quotes": [2, "prefer-single"],
        "react/no-string-refs": 0,
        "react/prop-types": 0,
        "react/no-unused-prop-types": 1,
        "react/require-default-props": 0,
        "react/sort-comp": [2, {
          "order": [
            "type-annotations",
            "static-methods",
            "lifecycle",
            "everything-else",
            "render-others",
            "render"
          ],
          "groups": {
            "render-others": [
              "/^render.+$/"
            ]
          }
        }],
        "react/jsx-filename-extension": [
          1,
          {
            "extensions": [
              ".js",
              ".jsx"
            ]
          }
        ],
        "no-underscore-dangle": "off",
        "react/prefer-stateless-function": 0
      }
};