const dotenv = require('dotenv');
const contentfulManagement = require('contentful-management');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../../../../apps/storefront/.env') });

const { exec } = require('child_process');
exec(
  `yarn cf-content-types-generator -o src/types/generated/contentful -s ${process.env.CONTENTFUL_SPACE_ID} -t ${process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN}`,
  (err, stdout, stderr) => {
    if (err) {
      console.log(err);
      // node couldn't execute the command
      return;
    }

    // the *entire* stdout and stderr (buffered)
    console.log(stdout);
    console.log(stderr);
  },
);
