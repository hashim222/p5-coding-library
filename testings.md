# Testings

Both the development and deployed versions of this project has been manually tested multiple times.

## Feature Testings

- **Profile TestCases**

  ![Profile TestCases](./src/assets/readme-images/profiles-testcases.png)

- **Post TestCases**

  ![Post TestCases](./src/assets/readme-images/posts-testcases.png)

- **Comment TestCases**

  ![Comment TestCases](./src/assets/readme-images/comments-testcases.png)

- **Contact Form TestCases**

  ![Contact Form TestCases](./src/assets/readme-images/contact-form-testcases.png)

- **Auth TestCases**

  ![Auth TestCases](./src/assets/readme-images/auth-testcases.png)

- **Redirect Users TestCases**

  ![Redirect Users TestCases](./src/assets/readme-images/redirect-user-testcases.png)

## Eslint

Eslint was installed and configured locally. There was a lot of random errors were showing up, so I've added a custom `rules` to the `.eslintrc.json` file with help from alumni student Ian Meigh in the Slack channel.

![eslint rules](./src/assets/readme-images/eslint-rules.png)

- Following errors were detected by ESLint and ran this command `./node_modules/.bin/eslint src/*.js` which finds all the errors in the directory files.

  > **Note**: Few places I've used `// eslint-disable-next-line` to disable eslint for a specific line because eslint was picking up random errors.

  - **`./node_modules/.bin/eslint src/*.js`**

    ![eslint rules](./src/assets/readme-images/eslint-errors-1.png)

  - **`./node_modules/.bin/eslint src/**/\*.js`\*\*

    ![eslint rules](./src/assets/readme-images/eslint-errors-2.png)

  - **`./node_modules/.bin/eslint src/**/**/\*.js`**

    ![eslint rules](./src/assets/readme-images/eslint-errors-3.png)

## Lighthouse Check

## W3C CSS Code Validator

- All CSS code passed through the validator with no issues:

  ![css code validation](./src/assets/readme-images/css-code-validation.png)
